-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Cargo" (
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
    CONSTRAINT "Cargo_vesselId_fkey" FOREIGN KEY ("vesselId") REFERENCES "Vessel" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "Cargo_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_Cargo" ("breadth", "builder", "callSign", "cargoName", "classificationSociety", "consignee", "consigneeAddress", "createdAt", "description", "flag", "grossTonnage", "homePort", "id", "length", "manager", "mmsi", "note", "owner", "quantity", "sender", "senderAddress", "summerDWT", "updatedAt", "userId", "vesselId", "yearBuilt") SELECT "breadth", "builder", "callSign", "cargoName", "classificationSociety", "consignee", "consigneeAddress", "createdAt", "description", "flag", "grossTonnage", "homePort", "id", "length", "manager", "mmsi", "note", "owner", "quantity", "sender", "senderAddress", "summerDWT", "updatedAt", "userId", "vesselId", "yearBuilt" FROM "Cargo";
DROP TABLE "Cargo";
ALTER TABLE "new_Cargo" RENAME TO "Cargo";
CREATE UNIQUE INDEX "Cargo_vesselId_key" ON "Cargo"("vesselId");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
