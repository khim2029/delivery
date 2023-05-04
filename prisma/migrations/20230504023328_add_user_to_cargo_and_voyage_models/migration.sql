/*
  Warnings:

  - You are about to drop the `Cargos` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `userId` to the `Vessel` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "Cargos_vesselId_key";

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Cargos";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "Cargo" (
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
    "userId" TEXT NOT NULL,
    CONSTRAINT "Cargo_vesselId_fkey" FOREIGN KEY ("vesselId") REFERENCES "Vessel" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Cargo_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

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
    "updatedAt" DATETIME NOT NULL,
    "userId" TEXT NOT NULL,
    CONSTRAINT "Vessel_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_Vessel" ("arrivalPort", "arrivalTime", "createdAt", "departurePort", "departureTime", "id", "imo", "navigationalStatus", "updatedAt", "vesselName", "voyageDistance", "voyageState") SELECT "arrivalPort", "arrivalTime", "createdAt", "departurePort", "departureTime", "id", "imo", "navigationalStatus", "updatedAt", "vesselName", "voyageDistance", "voyageState" FROM "Vessel";
DROP TABLE "Vessel";
ALTER TABLE "new_Vessel" RENAME TO "Vessel";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;

-- CreateIndex
CREATE UNIQUE INDEX "Cargo_vesselId_key" ON "Cargo"("vesselId");
