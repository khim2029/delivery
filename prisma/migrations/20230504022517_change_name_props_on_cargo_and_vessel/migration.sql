/*
  Warnings:

  - You are about to drop the column `name` on the `Vessel` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `Cargos` table. All the data in the column will be lost.
  - Added the required column `vesselName` to the `Vessel` table without a default value. This is not possible if the table is not empty.
  - Added the required column `cargoName` to the `Cargos` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Vessel" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "vesselName" TEXT NOT NULL,
    "imo" TEXT NOT NULL,
    "departurePort" TEXT NOT NULL,
    "arrivalPort" TEXT NOT NULL,
    "departureTime" TEXT NOT NULL,
    "arrivalTime" TEXT NOT NULL,
    "voyageDistance" INTEGER NOT NULL,
    "voyageState" TEXT NOT NULL,
    "navigationalStatus" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);
INSERT INTO "new_Vessel" ("arrivalPort", "arrivalTime", "createdAt", "departurePort", "departureTime", "id", "imo", "navigationalStatus", "updatedAt", "voyageDistance", "voyageState") SELECT "arrivalPort", "arrivalTime", "createdAt", "departurePort", "departureTime", "id", "imo", "navigationalStatus", "updatedAt", "voyageDistance", "voyageState" FROM "Vessel";
DROP TABLE "Vessel";
ALTER TABLE "new_Vessel" RENAME TO "Vessel";
CREATE TABLE "new_Cargos" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "sender" TEXT NOT NULL,
    "senderAddress" TEXT NOT NULL,
    "consignee" TEXT NOT NULL,
    "consigneeAddress" TEXT NOT NULL,
    "cargoName" TEXT NOT NULL,
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
INSERT INTO "new_Cargos" ("breadth", "builder", "callSign", "classificationSociety", "consignee", "consigneeAddress", "createdAt", "description", "flag", "grossTonnage", "homePort", "id", "length", "manager", "mmsi", "note", "owner", "quantity", "sender", "senderAddress", "summerDWT", "updatedAt", "vesselId", "yearBuilt") SELECT "breadth", "builder", "callSign", "classificationSociety", "consignee", "consigneeAddress", "createdAt", "description", "flag", "grossTonnage", "homePort", "id", "length", "manager", "mmsi", "note", "owner", "quantity", "sender", "senderAddress", "summerDWT", "updatedAt", "vesselId", "yearBuilt" FROM "Cargos";
DROP TABLE "Cargos";
ALTER TABLE "new_Cargos" RENAME TO "Cargos";
CREATE UNIQUE INDEX "Cargos_vesselId_key" ON "Cargos"("vesselId");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
