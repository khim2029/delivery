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
    "Latitude" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "vesselId" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "Location_vesselId_fkey" FOREIGN KEY ("vesselId") REFERENCES "Vessel" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Cargo" (
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
    CONSTRAINT "Cargo_vesselId_fkey" FOREIGN KEY ("vesselId") REFERENCES "Vessel" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "Location_vesselId_key" ON "Location"("vesselId");

-- CreateIndex
CREATE UNIQUE INDEX "Cargo_vesselId_key" ON "Cargo"("vesselId");
