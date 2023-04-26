/*
  Warnings:

  - You are about to drop the `Cargo` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `VesselLocation` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `locations` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `vessels` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Cargo";
PRAGMA foreign_keys=on;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "VesselLocation";
PRAGMA foreign_keys=on;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "locations";
PRAGMA foreign_keys=on;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "vessels";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "Vessels" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "imo" TEXT NOT NULL,
    "departurePort" TEXT NOT NULL,
    "arrivalPort" TEXT NOT NULL,
    "departureTime" DATETIME NOT NULL,
    "arrivalTime" DATETIME NOT NULL,
    "voyageDistance" INTEGER NOT NULL,
    "voyageState" TEXT NOT NULL,
    "navigationalStatus" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "Locations" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "longitude" TEXT NOT NULL,
    "Latitude" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "VesselLocations" (
    "vesselId" TEXT NOT NULL,
    "locationId" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,

    PRIMARY KEY ("vesselId", "locationId"),
    CONSTRAINT "VesselLocations_vesselId_fkey" FOREIGN KEY ("vesselId") REFERENCES "Vessels" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "VesselLocations_locationId_fkey" FOREIGN KEY ("locationId") REFERENCES "Locations" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Cargos" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "sender" TEXT NOT NULL,
    "senderAddress" TEXT NOT NULL,
    "consignee" TEXT NOT NULL,
    "consigneeAddress" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "quantity" INTEGER NOT NULL,
    "note" TEXT NOT NULL,
    "vesselId" TEXT NOT NULL,
    "mmsi" INTEGER NOT NULL,
    "callSign" TEXT NOT NULL,
    "flag" TEXT NOT NULL,
    "grossTonnage" INTEGER NOT NULL,
    "summerDWT" INTEGER NOT NULL,
    "length" INTEGER NOT NULL,
    "breadth" INTEGER NOT NULL,
    "yearBuilt" INTEGER NOT NULL,
    "homePort" TEXT NOT NULL,
    "classificationSociety" TEXT NOT NULL,
    "builder" TEXT NOT NULL,
    "owner" TEXT NOT NULL,
    "manager" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "Cargos_vesselId_fkey" FOREIGN KEY ("vesselId") REFERENCES "Vessels" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "VesselLocations_vesselId_key" ON "VesselLocations"("vesselId");

-- CreateIndex
CREATE UNIQUE INDEX "VesselLocations_locationId_key" ON "VesselLocations"("locationId");

-- CreateIndex
CREATE UNIQUE INDEX "Cargos_vesselId_key" ON "Cargos"("vesselId");
