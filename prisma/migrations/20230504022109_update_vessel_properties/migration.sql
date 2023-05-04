-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Vessel" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
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
INSERT INTO "new_Vessel" ("arrivalPort", "arrivalTime", "createdAt", "departurePort", "departureTime", "id", "imo", "name", "navigationalStatus", "updatedAt", "voyageDistance", "voyageState") SELECT "arrivalPort", "arrivalTime", "createdAt", "departurePort", "departureTime", "id", "imo", "name", "navigationalStatus", "updatedAt", "voyageDistance", "voyageState" FROM "Vessel";
DROP TABLE "Vessel";
ALTER TABLE "new_Vessel" RENAME TO "Vessel";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
