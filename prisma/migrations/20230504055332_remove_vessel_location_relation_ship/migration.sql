/*
  Warnings:

  - You are about to drop the `VesselLocation` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `vesselLocations` to the `Vessel` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "VesselLocation_locationId_key";

-- DropIndex
DROP INDEX "VesselLocation_vesselId_key";

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "VesselLocation";
PRAGMA foreign_keys=on;

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
    "vesselLocations" TEXT NOT NULL,
    CONSTRAINT "Vessel_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_Vessel" ("arrivalPort", "arrivalTime", "createdAt", "departurePort", "departureTime", "id", "imo", "navigationalStatus", "updatedAt", "userId", "vesselName", "voyageDistance", "voyageState") SELECT "arrivalPort", "arrivalTime", "createdAt", "departurePort", "departureTime", "id", "imo", "navigationalStatus", "updatedAt", "userId", "vesselName", "voyageDistance", "voyageState" FROM "Vessel";
DROP TABLE "Vessel";
ALTER TABLE "new_Vessel" RENAME TO "Vessel";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
