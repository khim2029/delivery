import { redirect, type ActionArgs } from "@remix-run/node";
import { useState } from "react";
import { Col, Container, Form, Row, Button } from "react-bootstrap";
import { FormInput } from "~/components/FormInput";
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

export default function newVoyage() {
  const [values, setValues] = useState<any>({
    manager: "",
    owner: "",
    builder: "",
    classificationSociety: "",
    homePort: "",
    flag: "",
    callSign: "",
    note: "",
    description: "",
    consigneeAddress: "",
    consignee: "",
    senderAddress: "",
    sender: "",
    vesselName: "",
    cargoName: "",
    imo: "",
    departurePort: "",
    arrivalPort: "",
    voyageState: "",
    navigationalStatus: "",
    departureTime: "",
    arrivalTime: "",
    vesselLocations: "",
    voyageDistance: 0,
    mmsi: 0,
    quantity: 0,
    grossTonnage: 0,
    summerDWT: 0,
    length: 0,
    breadth: 0,
    yearBuilt: 0,
  });

  const formInputs = [
    {
      id: 0,
      name: "vesselName",
      type: "text",
      pattern: /^[a-zA-Z0-9]+$/,
      required: true,
      errorMessage: "Vessel Name must be a string",
      placeholder: "vesselName",
      label: "Vessel Name",
    },
    {
      id: 1,
      name: "imo",
      type: "text",
      pattern: /^[a-zA-Z0-9]+$/,
      required: true,
      errorMessage: "IMO must be a string",
      placeholder: "imo",
      label: "IMO",
    },
    {
      id: 2,
      name: "departurePort",
      type: "text",
      pattern: /^[a-zA-Z0-9]+$/,
      required: true,
      errorMessage: "Departure Port must be a string",
      placeholder: "departurePort",
      label: "Departure Port",
    },
    {
      id: 3,
      name: "arrivalPort",
      type: "text",
      pattern: /^[a-zA-Z0-9]+$/,
      required: true,
      errorMessage: "Arrival Port must be a string",
      placeholder: "arrivalPort",
      label: "Arrival Port",
    },
    {
      id: 4,
      name: "departureTime",
      type: "text",
      pattern: /^[a-zA-Z0-9]+$/,
      required: true,
      errorMessage: "Departure Time must be a string",
      placeholder: "departureTime",
      label: "Departure Time",
    },
    {
      id: 5,
      name: "arrivalTime",
      type: "text",
      pattern: /^[a-zA-Z0-9]+$/,
      required: true,
      errorMessage: "Arrival Time must be a string",
      placeholder: "arrivalTime",
      label: "Arrival Time",
    },
    {
      id: 6,
      name: "voyageDistance",
      type: "number",
      errorMessage: "Voyage Distance must be a number",
      pattern: /^-?\d*\.?\d+$/,
      placeholder: "Voyage Distance voyageDistance",
      label: "Voyage Distance",
    },
    {
      id: 7,
      name: "voyageState",
      type: "text",
      pattern: /^[a-zA-Z0-9]+$/,
      required: true,
      errorMessage: "Voyage State must be a string",
      placeholder: "voyageState",
      label: "Voyage State",
    },
    {
      id: 8,
      name: "navigationalStatus",
      type: "text",
      pattern: /^[a-zA-Z0-9]+$/,
      required: true,
      errorMessage: "must be a string",
      placeholder: "navigationalStatus",
      label: "Vessel Navigational Status",
    },
    {
      id: 9,
      name: "sender",
      type: "text",
      pattern: /^[a-zA-Z0-9]+$/,
      required: true,
      errorMessage: "Cargo Sender must be a string",
      placeholder: "sender",
      label: "Cargo Sender",
    },
    {
      id: 10,
      name: "senderAddress",
      type: "text",
      pattern: /^[a-zA-Z0-9]+$/,
      required: true,
      errorMessage: "Cargo Sender Address must be a string",
      placeholder: "senderAddress",
      label: "Cargo Sender Address",
    },
    {
      id: 11,
      name: "consignee",
      type: "text",
      pattern: /^[a-zA-Z0-9]+$/,
      required: true,
      errorMessage: "Consignee must be a string",
      placeholder: "consignee",
      label: "Consignee",
    },
    {
      id: 12,
      name: "consigneeAddress",
      type: "text",
      pattern: /^[a-zA-Z0-9]+$/,
      required: true,
      errorMessage: "Consignee Address must be a string",
      placeholder: "consigneeAddress",
      label: "Consignee Address",
    },
    {
      id: 13,
      name: "cargoName",
      type: "text",
      pattern: /^[a-zA-Z0-9]+$/,
      required: true,
      errorMessage: "Cargo Name must be a string",
      placeholder: "cargoName",
      label: "Cargo Name",
    },
    {
      id: 14,
      name: "description",
      type: "text",
      placeholder: "description",
      pattern: /^[a-zA-Z0-9]+$/,
      required: true,
      errorMessage: "Description must be a string",
      label: "Description",
    },
    {
      id: 15,
      name: "quantity",
      type: "number",
      errorMessage: "Quantitymust be a number",
      pattern: /^-?\d*\.?\d+$/,
      placeholder: "quantity",
      label: "Quantity",
    },
    {
      id: 16,
      name: "note",
      type: "text",
      pattern: /^[a-zA-Z0-9]+$/,
      required: true,
      errorMessage: "Note must be a string",
      placeholder: "note",
      label: "Note",
    },
    {
      id: 17,
      name: "mmsi",
      type: "number",
      errorMessage: "Home Port must be a number",
      pattern: /^-?\d*\.?\d+$/,
      placeholder: "mmsi",
      label: "MMSI",
      required: true,
    },
    {
      id: 18,
      name: "callSign",
      type: "text",
      pattern: /^[a-zA-Z0-9]+$/,
      required: true,
      errorMessage: "Call Sign must be a string",
      placeholder: "callSign",
      label: "Call Sign",
    },
    {
      id: 19,
      name: "flag",
      type: "text",
      pattern: /^[a-zA-Z0-9]+$/,
      required: true,
      errorMessage: "Flag must be a string",
      placeholder: "flag",
      label: "Flag",
    },
    {
      id: 20,
      name: "grossTonnage",
      type: "number",
      errorMessage: "Gross Tonnage must be a number",
      pattern: /^-?\d*\.?\d+$/,
      placeholder: "grossTonnage",
      label: "Gross Tonnage",
    },
    {
      id: 21,
      name: "summerDWT",
      type: "number",
      errorMessage: "Summer DWT must be a number",
      pattern: /^-?\d*\.?\d+$/,
      placeholder: "summerDWT",
      label: "Summer DWT",
    },
    {
      id: 22,
      name: "length",
      type: "number",
      errorMessage: "Length must be a number",
      pattern: /^-?\d*\.?\d+$/,
      placeholder: "length",
      label: "Length",
    },
    {
      id: 23,
      name: "breadth",
      type: "number",
      errorMessage: "Breadth must be a number",
      pattern: /^-?\d*\.?\d+$/,
      placeholder: "breadth",
      label: "Breadth",
    },
    {
      id: 24,
      name: "yearBuilt ",
      type: "number",
      errorMessage: "Year Built must be a number",
      pattern: /^-?\d*\.?\d+$/,
      placeholder: "yearBuilt",
      label: "Year Built",
    },
    {
      id: 25,
      name: "homePort ",
      type: "text",
      pattern: /^[a-zA-Z0-9]+$/,
      required: true,
      errorMessage: "Home Port must be a string",
      placeholder: "homePort",
      label: "Home Port",
    },
    {
      id: 26,
      name: "classificationSociety",
      type: "text",
      pattern: /^[a-zA-Z0-9]+$/,
      required: true,
      errorMessage: "must be a string",
      placeholder: "classificationSociety",
      label: "Classification Society",
    },
    {
      id: 27,
      name: "builder",
      type: "text",
      pattern: /^[a-zA-Z0-9]+$/,
      required: true,
      errorMessage: "Builder must be a string",
      placeholder: "builder",
      label: "Builder",
    },
    {
      id: 28,
      name: "owner",
      type: "text",
      pattern: /^[a-zA-Z0-9]+$/,
      required: true,
      errorMessage: "Owner must be a string",
      placeholder: "owner",
      label: "Owner",
    },
    {
      id: 29,
      name: "manager",
      type: "text",
      pattern: /^[a-zA-Z0-9]+$/,
      required: true,
      errorMessage: "Manager must be a string",
      placeholder: "manager",
      label: "Manager",
    },
    {
      id: 30,
      name: "vesselLocations",
      type: "text",
      pattern: /^[a-zA-Z0-9]+$/,
      required: true,
      errorMessage: "Vessel Locations must be a string",
      placeholder: "vesselLocations",
      label: "Vessel Locations",
    },
  ];
  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  console.log(values);
  return (
    <Container>
      <form>
        <Row>
          <div className="mb-4">
            <p className="mb-3 mt-4" style={{ color: "blue" }}>
              {"Voyage information".toUpperCase()}
            </p>
          </div>
          {formInputs.map((input) => (
            <Col key={input.id} className=" mb-3 mt-3" sm={6} xs={12}>
              <FormInput
                {...input}
                value={values[input.name]}
                onChange={handleOnChange}
              />
            </Col>
          ))}
        </Row>
      </form>
    </Container>
  );
}
