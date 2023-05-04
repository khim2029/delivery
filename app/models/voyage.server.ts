import { Cargo, User, Vessel } from "@prisma/client";
import { prisma } from "~/db.server";

export const createVoyage = async ({
  vesselName,
  imo,
  departurePort,
  arrivalPort,
  departureTime,
  arrivalTime,
  voyageDistance,
  voyageState,
  navigationalStatus,
  sender,
  senderAddress,
  consignee,
  consigneeAddress,
  cargoName,
  description,
  quantity,
  note,
  mmsi,
  callSign,
  flag,
  grossTonnage,
  summerDWT,
  length,
  breadth,
  yearBuilt,
  homePort,
  classificationSociety,
  builder,
  owner,
  manager,
  userId,
  vesselLocations,
}: Omit<Vessel, "id" | "userId" | "createdAt" | "updatedAt"> &
  Omit<Cargo, "id" | "vesselId" | "userId" | "createdAt" | "updatedAt"> & {
    userId: User["id"];
  }) => {
  await prisma
    .$transaction(async (tx) => {
      const vessel = await tx.vessel.create({
        data: {
          vesselLocations,
          vesselName,
          imo,
          departurePort,
          arrivalPort,
          departureTime,
          arrivalTime,
          voyageDistance,
          voyageState,
          navigationalStatus,
          user: {
            connect: {
              id: userId,
            },
          },
        },
      });
      if (!vessel) {
        throw new Error(`Voyage could not be created, try again later`);
      }
      const cargoInfo = await tx.cargo.create({
        data: {
          sender,
          senderAddress,
          consignee,
          consigneeAddress,
          cargoName,
          description,
          quantity,
          note,
          vessel: {
            connect: {
              id: vessel.id,
            },
          },
          mmsi,
          callSign,
          flag,
          grossTonnage,
          summerDWT,
          length,
          breadth,
          yearBuilt,
          homePort,
          classificationSociety,
          builder,
          owner,
          manager,
          user: {
            connect: {
              id: userId,
            },
          },
        },
      });
      if (!cargoInfo) {
        throw new Error(`Voyage could not be created, try again later`);
      }
      return true;
    })
    .then(async () => {
      await prisma.$disconnect();
    })
    .catch(async (e) => {
      console.log(e);
      await prisma.$disconnect();
      process.exit(1);
    });
};
