import { json, type ActionArgs } from "@remix-run/node";
import { requireUserId } from "~/session.server";
import { validateInPutInteger, validateInPutString } from "~/validation";
export const action = async ({ request }: ActionArgs) => {
  const stringData: any[] = [];
  const intData: any[] = [];
  const userId = await requireUserId(request);
  const formData = await request.formData();
  const name = formData.get("name");
  const imo = formData.get("imo");
  const departurePort = formData.get("departurePort");
  const arrivalPort = formData.get("arrivalPort");
  const voyageState = formData.get("voyageState");
  const navigationalStatus = formData.get("navigationalStatus");
  const departureTime = formData.get("departureTime");
  const arrivalTime = formData.get("arrivalTime");
  const voyageDistance = formData.get("voyageDistance");
  const sender = formData.get("sender");
  const senderAddress = formData.get("senderAddress");
  const consignee = formData.get("consignee");
  const consigneeAddress = formData.get("consigneeAddress");
  const description = formData.get("description");
  const note = formData.get("note");
  const callSign = formData.get("callSign");
  const flag = formData.get("flag");
  const homePort = formData.get("homePort");
  const classificationSociety = formData.get("classificationSociety");
  const builder = formData.get("builder");
  const owner = formData.get("owner");
  const manager = formData.get("manager");
  const mmsi = formData.get("mmsi");
  const quantity = formData.get("quantity");
  const grossTonnage = formData.get("grossTonnage");
  const summerDWT = formData.get("summerDWT");
  const length = formData.get("length");
  const breadth = formData.get("breadth");
  const yearBuilt = formData.get("yearBuilt");
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
    name,
    imo,
    departurePort,
    arrivalPort,
    voyageState,
    navigationalStatus,
    departureTime,
    arrivalTime
  );
  const validateStringInput = validateInPutString(stringData);
  const validateNumberInput = validateInPutInteger(intData);
};
