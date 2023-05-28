import { prisma } from "~/db.server";

export const findLocationsCordinates = async (
  locations: string[]
): Promise<
  {
    name: string;
    latitude: string;
    longitude: string;
  }[]
> => {
  const x = await prisma.location.findMany({
    where: {
      slug: {
        in: locations,
      },
    },
    select: {
      name: true,
      latitude: true,
      longitude: true,
    },
  });
  return x;
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
