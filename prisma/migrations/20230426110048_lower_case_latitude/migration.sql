/*
  Warnings:

  - You are about to drop the column `Latitude` on the `Locations` table. All the data in the column will be lost.
  - Added the required column `latitude` to the `Locations` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Locations" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "longitude" TEXT NOT NULL,
    "latitude" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);
INSERT INTO "new_Locations" ("createdAt", "id", "longitude", "name", "updatedAt") SELECT "createdAt", "id", "longitude", "name", "updatedAt" FROM "Locations";
DROP TABLE "Locations";
ALTER TABLE "new_Locations" RENAME TO "Locations";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
