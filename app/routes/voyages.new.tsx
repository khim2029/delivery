import type { ActionArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import { Form, isRouteErrorResponse, useRouteError } from "@remix-run/react";
import { useRef } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { createVoyage } from "~/models/voyage.server";
import { requireUserId } from "~/session.server";

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
  for (const data of stringData) {
    if (typeof data === "string" && data.length === 0) {
      return json(
        { errors: { body: null, res: `${data} is required` } },
        { status: 400 }
      );
    }
    if (data.toString().length > 256) {
      return json(
        { errors: { body: null, res: `${data} is too long` } },
        { status: 400 }
      );
    }
  }
  for (const data of intData) {
    if (typeof data === "number" && data.toString().length === 0) {
      return json(
        { errors: { body: null, res: `${data} is required` } },
        { status: 400 }
      );
    }

    if (data.toString().length > 254) {
      return json(
        { errors: { body: null, res: `${data} is too long` } },
        { status: 400 }
      );
    }
  }

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
      ? parseInt(voyageDistance, 10)
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
};

export default function NewVoyage() {
  const formInputs = [
    {
      id: 0,
      name: "vesselName",
      type: "text",
      required: true,
      errorMessage: "Vessel Name must be a string",
      placeholder: "vesselName",
      label: "Vessel Name",
      ref: useRef<HTMLInputElement>(null),
    },
    {
      id: 1,
      name: "imo",
      type: "text",
      required: true,
      errorMessage: "IMO must be a string",
      placeholder: "imo",
      label: "IMO",
      ref: useRef<HTMLInputElement>(null),
    },
    {
      id: 2,
      name: "departurePort",
      type: "text",
      required: true,
      errorMessage: "Departure Port must be a string",
      placeholder: "departurePort",
      label: "Departure Port",
      ref: useRef<HTMLInputElement>(null),
    },
    {
      id: 3,
      name: "arrivalPort",
      type: "text",
      required: true,
      errorMessage: "Arrival Port must be a string",
      placeholder: "arrivalPort",
      label: "Arrival Port",
      ref: useRef<HTMLInputElement>(null),
    },
    {
      id: 4,
      name: "departureTime",
      type: "text",
      required: true,
      errorMessage: "Departure Time must be a string",
      placeholder: "departureTime",
      label: "Departure Time",
      ref: useRef<HTMLInputElement>(null),
    },
    {
      id: 5,
      name: "arrivalTime",
      type: "text",
      required: true,
      errorMessage: "Arrival Time must be a string",
      placeholder: "arrivalTime",
      label: "Arrival Time",
      ref: useRef<HTMLInputElement>(null),
    },
    {
      id: 6,
      name: "voyageDistance",
      type: "number",
      required: true,
      errorMessage: "Voyage Distance must be a number",
      placeholder: "Voyage Distance voyageDistance",
      label: "Voyage Distance",
      ref: useRef<HTMLInputElement>(null),
    },
    {
      id: 7,
      name: "voyageState",
      type: "text",
      required: true,
      errorMessage: "Voyage State must be a string",
      placeholder: "voyageState",
      label: "Voyage State",
      ref: useRef<HTMLInputElement>(null),
    },
    {
      id: 8,
      name: "navigationalStatus",
      type: "text",
      required: true,
      errorMessage: "must be a string",
      placeholder: "navigationalStatus",
      label: "Vessel Navigational Status",
      ref: useRef<HTMLInputElement>(null),
    },
    {
      id: 9,
      name: "sender",
      type: "text",
      required: true,
      errorMessage: "Cargo Sender must be a string",
      placeholder: "sender",
      label: "Cargo Sender",
      ref: useRef<HTMLInputElement>(null),
    },
    {
      id: 10,
      name: "senderAddress",
      type: "text",
      required: true,
      errorMessage: "Cargo Sender Address must be a string",
      placeholder: "senderAddress",
      label: "Cargo Sender Address",
      ref: useRef<HTMLInputElement>(null),
    },
    {
      id: 11,
      name: "consignee",
      type: "text",
      required: true,
      errorMessage: "Consignee must be a string",
      placeholder: "consignee",
      label: "Consignee",
      ref: useRef<HTMLInputElement>(null),
    },
    {
      id: 12,
      name: "consigneeAddress",
      type: "text",
      required: true,
      errorMessage: "Consignee Address must be a string",
      placeholder: "consigneeAddress",
      label: "Consignee Address",
      ref: useRef<HTMLInputElement>(null),
    },
    {
      id: 13,
      name: "cargoName",
      type: "text",
      required: true,
      errorMessage: "Cargo Name must be a string",
      placeholder: "cargoName",
      label: "Cargo Name",
      ref: useRef<HTMLInputElement>(null),
    },
    {
      id: 14,
      name: "description",
      type: "text",
      placeholder: "description",
      required: true,
      errorMessage: "Description must be a string",
      label: "Description",
      ref: useRef<HTMLInputElement>(null),
    },
    {
      id: 15,
      name: "quantity",
      type: "number",
      required: true,
      errorMessage: "Quantitymust be a number",
      placeholder: "quantity",
      label: "Quantity",
      ref: useRef<HTMLInputElement>(null),
    },
    {
      id: 16,
      name: "note",
      type: "text",
      required: true,
      errorMessage: "Note must be a string",
      placeholder: "note",
      label: "Note",
      ref: useRef<HTMLInputElement>(null),
    },
    {
      id: 17,
      name: "mmsi",
      type: "number",
      required: true,
      errorMessage: "Home Port must be a number",
      placeholder: "mmsi",
      label: "MMSI",
      ref: useRef<HTMLInputElement>(null),
    },
    {
      id: 18,
      name: "callSign",
      type: "text",
      required: true,
      errorMessage: "Call Sign must be a string",
      placeholder: "callSign",
      label: "Call Sign",
      ref: useRef<HTMLInputElement>(null),
    },
    {
      id: 19,
      name: "flag",
      type: "text",
      required: true,
      errorMessage: "Flag must be a string",
      placeholder: "flag",
      label: "Flag",
      ref: useRef<HTMLInputElement>(null),
    },
    {
      id: 20,
      name: "grossTonnage",
      type: "number",
      required: true,
      errorMessage: "Gross Tonnage must be a number",
      placeholder: "grossTonnage",
      label: "Gross Tonnage",
      ref: useRef<HTMLInputElement>(null),
    },
    {
      id: 21,
      name: "summerDWT",
      type: "number",
      required: true,
      errorMessage: "Summer DWT must be a number",
      placeholder: "summerDWT",
      label: "Summer DWT",
      ref: useRef<HTMLInputElement>(null),
    },
    {
      id: 22,
      name: "length",
      type: "number",
      required: true,
      errorMessage: "Length must be a number",
      placeholder: "length",
      label: "Length",
      ref: useRef<HTMLInputElement>(null),
    },
    {
      id: 23,
      name: "breadth",
      type: "number",
      required: true,
      errorMessage: "Breadth must be a number",
      placeholder: "breadth",
      label: "Breadth",
      ref: useRef<HTMLInputElement>(null),
    },
    {
      id: 24,
      name: "yearBuilt",
      type: "number",
      required: true,
      errorMessage: "Year Built must be a number",
      placeholder: "yearBuilt",
      label: "Year Built",
      ref: useRef<HTMLInputElement>(null),
    },
    {
      id: 25,
      name: "homePort",
      type: "text",
      required: true,
      errorMessage: "Home Port must be a string",
      placeholder: "homePort",
      label: "Home Port",
      ref: useRef<HTMLInputElement>(null),
    },
    {
      id: 26,
      name: "classificationSociety",
      type: "text",
      required: true,
      errorMessage: "must be a string",
      placeholder: "classificationSociety",
      label: "Classification Society",
      ref: useRef<HTMLInputElement>(null),
    },
    {
      id: 27,
      name: "builder",
      type: "text",
      required: true,
      errorMessage: "Builder must be a string",
      placeholder: "builder",
      label: "Builder",
      ref: useRef<HTMLInputElement>(null),
    },
    {
      id: 28,
      name: "owner",
      type: "text",
      required: true,
      errorMessage: "Owner must be a string",
      placeholder: "owner",
      label: "Owner",
      ref: useRef<HTMLInputElement>(null),
    },
    {
      id: 29,
      name: "manager",
      type: "text",
      required: true,
      errorMessage: "Manager must be a string",
      placeholder: "manager",
      label: "Manager",
      ref: useRef<HTMLInputElement>(null),
    },
    {
      id: 30,
      name: "vesselLocations",
      type: "text",
      required: true,
      errorMessage: "Vessel Locations must be a string",
      placeholder: "vesselLocations",
      label: "Vessel Locations",
      ref: useRef<HTMLInputElement>(null),
    },
  ];

  return (
    <Container>
      <Form
        method="post"
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 8,
          width: "100%",
        }}
      >
        <Row>
          <div className="mb-4">
            <p className="mb-3 mt-4" style={{ color: "blue" }}>
              {"Voyage information".toUpperCase()}
            </p>
          </div>
          {formInputs.map((input) => (
            <Col key={input.id} className=" mb-3 mt-3" sm={6} xs={12}>
              <label className="flex w-full flex-col gap-1">
                <span>{input.label}: </span>
                <input
                  ref={input.ref}
                  name={input.name}
                  className="flex-1 rounded-md border-2 border-blue-500 px-3 text-lg leading-loose"
                  type={input.type}
                  required={input.required}
                />
              </label>
            </Col>
          ))}
          <Button
            style={{ backgroundColor: "rgb(22 46 70)" }}
            variant="success"
            type="submit"
          >
            Submit
          </Button>
        </Row>
      </Form>
    </Container>
  );
}

export function ErrorBoundary() {
  const error = useRouteError();

  if (error instanceof Error) {
    return <div>An unexpected error occurred: {error.message}</div>;
  }

  if (!isRouteErrorResponse(error)) {
    return <h1>Unknown Error</h1>;
  }

  if (error.status === 500) {
    return <div>Voyage not created, try again later</div>;
  }

  return <div>An unexpected error occurred: {error.statusText}</div>;
}
