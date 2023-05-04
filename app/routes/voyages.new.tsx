import { json, type ActionArgs, redirect } from "@remix-run/node";
import { createVoyage } from "~/models/voyage.server";
import { requireUserId } from "~/session.server";
import { validateInPutInteger, validateInPutString } from "~/validation";
export const action = async ({ request }: ActionArgs) => {
  const stringData: any[] = [];
  const intData: any[] = [];
  const userId = await requireUserId(request);
  const formData = await request.formData();
  const cargoName = formData.get("cargoName")?.toString() ?? "";
  const imo = formData.get("imo")?.toString() ?? "";
  const departurePort = formData.get("departurePort")?.toString() ?? "";
  const arrivalPort = formData.get("arrivalPort")?.toString() ?? "";
  const voyageState = formData.get("voyageState")?.toString() ?? "";
  const navigationalStatus =
    formData.get("navigationalStatus")?.toString() ?? "";
  const departureTime = formData.get("departureTime")?.toString() ?? "";
  const arrivalTime = formData.get("arrivalTime")?.toString() ?? "";
  const voyageDistance = formData.get("voyageDistance")?.toString() ?? "";
  const sender = formData.get("sender")?.toString() ?? "";
  const senderAddress = formData.get("senderAddress")?.toString() ?? "";
  const consignee = formData.get("consignee")?.toString() ?? "";
  const consigneeAddress = formData.get("consigneeAddress")?.toString() ?? "";
  const description = formData.get("description")?.toString() ?? "";
  const note = formData.get("note")?.toString() ?? "";
  const callSign = formData.get("callSign")?.toString() ?? "";
  const flag = formData.get("flag")?.toString() ?? "";
  const homePort = formData.get("homePort")?.toString() ?? "";
  const classificationSociety =
    formData.get("classificationSociety")?.toString() ?? "";
  const builder = formData.get("builder")?.toString() ?? "";
  const owner = formData.get("owner")?.toString() ?? "";
  const manager = formData.get("manager")?.toString() ?? "";
  const vesselName = formData.get("vesselName")?.toString() ?? "";
  const mmsi = formData.get("mmsi")?.toString() ?? "";
  const quantity = formData.get("quantity")?.toString() ?? "";
  const grossTonnage = formData.get("grossTonnage")?.toString() ?? "";
  const summerDWT = formData.get("summerDWT")?.toString() ?? "";
  const length = formData.get("length")?.toString() ?? "";
  const breadth = formData.get("breadth")?.toString() ?? "";
  const yearBuilt = formData.get("yearBuilt")?.toString() ?? "";
  const vesselLocations = formData.get("vesselLocations")?.toString() ?? "";
  intData.push(
    voyageDistance,
    mmsi,
    quantity,
    grossTonnage,
    summerDWT,
    length,
    breadth,
    yearBuilt
  );
  stringData.push(
    manager,
    owner,
    builder,
    classificationSociety,
    homePort,
    flag,
    callSign,
    note,
    description,
    consigneeAddress,
    consignee,
    senderAddress,
    sender,
    vesselName,
    cargoName,
    imo,
    departurePort,
    arrivalPort,
    voyageState,
    navigationalStatus,
    departureTime,
    arrivalTime,
    vesselLocations
  );
  validateInPutString(stringData);
  validateInPutInteger(intData);

  const voyage = await createVoyage({
    manager,
    userId,
    owner,
    builder,
    classificationSociety,
    homePort,
    flag,
    callSign,
    note,
    description,
    consigneeAddress,
    consignee,
    senderAddress,
    sender,
    vesselName,
    cargoName,
    imo,
    departurePort,
    arrivalPort,
    voyageState,
    navigationalStatus,
    departureTime,
    arrivalTime,
    vesselLocations,
    voyageDistance: !Number.isNaN(parseInt(voyageDistance, 10))
      ? parseInt(mmsi, 10)
      : 0,
    mmsi: !Number.isNaN(parseInt(mmsi, 10)) ? parseInt(mmsi, 10) : 0,
    quantity: !Number.isNaN(parseInt(quantity, 10))
      ? parseInt(quantity, 10)
      : 0,
    grossTonnage: !Number.isNaN(parseInt(grossTonnage, 10))
      ? parseInt(grossTonnage, 10)
      : 0,
    summerDWT: !Number.isNaN(parseInt(summerDWT, 10))
      ? parseInt(summerDWT, 10)
      : 0,
    length: !Number.isNaN(parseInt(length, 10)) ? parseInt(length, 10) : 0,
    breadth: !Number.isNaN(parseInt(breadth, 10)) ? parseInt(breadth, 10) : 0,
    yearBuilt: !Number.isNaN(parseInt(yearBuilt, 10))
      ? parseInt(yearBuilt, 10)
      : 0,
  });
  return redirect(`/voyages/`);
};
