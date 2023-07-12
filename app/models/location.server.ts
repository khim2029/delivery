import { Location } from "@prisma/client";
import { prisma } from "~/db.server";

export const findLocationsCordinates = async (
  locations: string[]
): Promise<
  {
    name: string;
    port: string | null;
    latitude: string;
    longitude: string;
  }[]
> => {
  return await prisma.location.findMany({
    where: {
      slug: {
        in: locations,
      },
    },
    select: {
      name: true,
      latitude: true,
      longitude: true,
      port: true,
    },
  });
};

export const getLocationsCordinates = async (
  vesselLocations: string[]
): Promise<
  number | { name: string; latitude: string; longitude: string }[]
> => {
  if (vesselLocations[0].toString() === vesselLocations[1].toString()) {
    return 0;
  }
  let vesselLocationSlug = vesselLocations.map((location) => {
    return location.replace(/\s/g, "");
  });
  const locationCordinates = await findLocationsCordinates([
    vesselLocationSlug[0],
    vesselLocationSlug[vesselLocations.length - 1],
  ]);
  if (locationCordinates && locationCordinates.length < 2) {
    throw new Error(`Error: Ensure the input location is correct`);
  }
  return locationCordinates;
};

export const getVoyageLocations = async (): Promise<Partial<Location>[]> => {
  return await prisma.location.findMany({
    select: {
      name: true,
      latitude: true,
      longitude: true,
      port: true,
    },
  });
};
