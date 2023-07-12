import { useMatches } from "@remix-run/react";
import jstz from "jstz";
import moment from "moment";
import { useMemo } from "react";

import type { User } from "~/models/user.server";

const DEFAULT_REDIRECT = "/";

/**
 * This should be used any time the redirect path is user-provided
 * (Like the query string on our login/signup pages). This avoids
 * open-redirect vulnerabilities.
 * @param {string} to The redirect destination
 * @param {string} defaultRedirect The redirect to use if the to is unsafe.
 */
export function safeRedirect(
  to: FormDataEntryValue | string | null | undefined,
  defaultRedirect: string = DEFAULT_REDIRECT
) {
  if (!to || typeof to !== "string") {
    return defaultRedirect;
  }

  if (!to.startsWith("/") || to.startsWith("//")) {
    return defaultRedirect;
  }

  return to;
}

/**
 * This base hook is used in other hooks to quickly search for specific data
 * across all loader data using useMatches.
 * @param {string} id The route id
 * @returns {JSON|undefined} The router data or undefined if not found
 */
export function useMatchesData(
  id: string
): Record<string, unknown> | undefined {
  const matchingRoutes = useMatches();
  const route = useMemo(
    () => matchingRoutes.find((route) => route.id === id),
    [matchingRoutes, id]
  );
  return route?.data;
}

function isUser(user: any): user is User {
  return user && typeof user === "object" && typeof user.email === "string";
}

export function useOptionalUser(): User | undefined {
  const data = useMatchesData("root");
  if (!data || !isUser(data.user)) {
    return undefined;
  }
  return data.user;
}

export function useUser(): User {
  const maybeUser = useOptionalUser();
  if (!maybeUser) {
    throw new Error(
      "No user found in root loader, but user is required by useUser. If user is optional, try useOptionalUser instead."
    );
  }
  return maybeUser;
}

export function validateEmail(email: unknown): email is string {
  return typeof email === "string" && email.length > 3 && email.includes("@");
}

export function calculateVoyageDistance(
  lat1: string,
  lon1: string,
  lat2: string,
  lon2: string
) {
  const R = 6371;

  const lat1Rad = (Math.PI / 180) * Number(lat1);
  const lon1Rad = (Math.PI / 180) * Number(lon1);
  const lat2Rad = (Math.PI / 180) * Number(lat2);
  const lon2Rad = (Math.PI / 180) * Number(lon2);

  const dLat = lat2Rad - lat1Rad;
  const dLon = lon2Rad - lon1Rad;

  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(lat1Rad) * Math.cos(lat2Rad) * Math.sin(dLon / 2) ** 2;

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const distance = R * c;

  return Math.round(distance);
}

export function convertDateToUTC(dateStr: string) {
  const dateArr: string[] = dateStr.split("/");
  const month = parseInt(dateArr[1], 10) - 1;
  if (!isNaN(month)) {
    const day = parseInt(dateArr[0], 10);
    const year = parseInt(dateArr[2], 10);
    const date = new Date(year, month, day);
    const utcTime = Date.UTC(
      date.getFullYear(),
      date.getMonth(),
      date.getDate(),
      date.getHours(),
      date.getMinutes(),
      date.getSeconds()
    );
    return new Date(utcTime).toISOString();
  }
  return dateStr;
}

export function calculateVoyageProgress(
  vesselLocations: string,
  presentLocation: string
) {
  const vesselLocationsArr = vesselLocations.split(",");
  const index = vesselLocationsArr.indexOf(presentLocation.trim()) + 1;
  return Math.max(index / vesselLocationsArr.length) * 100;
}

export function getVoyageLastLocation(vesselLocations: string) {
  const vesselLocationsArr = vesselLocations.split(",");
  return vesselLocationsArr[vesselLocationsArr.length - 1];
}

export function getVoyageInitialLocation(vesselLocations: string) {
  const vesselLocationsArr = vesselLocations.split(",");
  return vesselLocationsArr[0];
}

export function distanceTravelled(
  vesselLocations: string,
  presentLocation: string,
  voyageDistance: number
): number {
  const vesselLocationsArr = vesselLocations.split(",");
  const index = vesselLocationsArr.indexOf(presentLocation.trim()) + 1;
  return Math.round((voyageDistance / vesselLocationsArr.length) * index);
}

export function distanceTogo(
  vesselLocations: string,
  presentLocation: string,
  voyageDistance: number
) {
  return Math.round(
    voyageDistance -
      distanceTravelled(vesselLocations, presentLocation, voyageDistance)
  );
}

function padZero(num: number) {
  return String(num).padStart(2, "0");
}

export function calculateLocalTimeFromLogitudeAndLatitude(longitude: string) {
  const now = new Date();
  const offset = Math.round(Number(longitude) / 15) * 60;
  const utc = now.getTime() + now.getTimezoneOffset() * 60000 - offset * 60000;
  const localDate = new Date(utc);
  const hours = localDate.getHours();
  const minutes = localDate.getMinutes();
  const seconds = localDate.getSeconds();
  const localTime = `${hours}:${padZero(minutes)}:${padZero(seconds)}`;
  return localTime;
}
