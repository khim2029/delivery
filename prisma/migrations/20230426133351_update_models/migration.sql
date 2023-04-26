/*
  Warnings:

  - You are about to drop the `Locations` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `VesselLocations` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Vessels` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropIndex
DROP INDEX "VesselLocations_locationId_key";

-- DropIndex
DROP INDEX "VesselLocations_vesselId_key";

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Locations";
PRAGMA foreign_keys=on;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "VesselLocations";
PRAGMA foreign_keys=on;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Vessels";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "Vessel" (
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
CREATE TABLE "Location" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "longitude" TEXT NOT NULL,
    "latitude" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "VesselLocation" (
    "vesselId" TEXT NOT NULL,
    "locationId" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,

    PRIMARY KEY ("vesselId", "locationId"),
    CONSTRAINT "VesselLocation_vesselId_fkey" FOREIGN KEY ("vesselId") REFERENCES "Vessel" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "VesselLocation_locationId_fkey" FOREIGN KEY ("locationId") REFERENCES "Location" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Cargos" (
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
    CONSTRAINT "Cargos_vesselId_fkey" FOREIGN KEY ("vesselId") REFERENCES "Vessel" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Cargos" ("breadth", "builder", "callSign", "classificationSociety", "consignee", "consigneeAddress", "createdAt", "description", "flag", "grossTonnage", "homePort", "id", "length", "manager", "mmsi", "name", "note", "owner", "quantity", "sender", "senderAddress", "summerDWT", "updatedAt", "vesselId", "yearBuilt") SELECT "breadth", "builder", "callSign", "classificationSociety", "consignee", "consigneeAddress", "createdAt", "description", "flag", "grossTonnage", "homePort", "id", "length", "manager", "mmsi", "name", "note", "owner", "quantity", "sender", "senderAddress", "summerDWT", "updatedAt", "vesselId", "yearBuilt" FROM "Cargos";
DROP TABLE "Cargos";
ALTER TABLE "new_Cargos" RENAME TO "Cargos";
CREATE UNIQUE INDEX "Cargos_vesselId_key" ON "Cargos"("vesselId");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;

-- CreateIndex
CREATE UNIQUE INDEX "VesselLocation_vesselId_key" ON "VesselLocation"("vesselId");

-- CreateIndex
CREATE UNIQUE INDEX "VesselLocation_locationId_key" ON "VesselLocation"("locationId");
