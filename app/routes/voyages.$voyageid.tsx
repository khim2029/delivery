import { ActionArgs, LoaderArgs, json } from "@remix-run/node";
import {
  Form,
  isRouteErrorResponse,
  useLoaderData,
  useRouteError,
} from "@remix-run/react";
import { Button, Col, Container, Row } from "react-bootstrap";
import invariant from "tiny-invariant";
import { getVoyage, updateVoyage } from "~/models/voyage.server";
import { requireUserId } from "~/session.server";

export const action = async ({ request, params }: ActionArgs) => {
  const userId = await requireUserId(request);
  invariant(params.voyageId, "voyageId not found");
  const voyage = await getVoyage({ id: params.voyageId, userId });
  if (!voyage) {
    throw new Response("Not Found", { status: 404 });
  }
  const formData = await request.formData();
  const presentLocation = formData.get("presentLocation")?.toString() ?? "";
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
  await updateVoyage(
    {
      presentLocation,
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
    },
    params.voyageId,
    voyage.id
  );
  return null;
};
export const loader = async ({ params, request }: LoaderArgs) => {
  const userId = await requireUserId(request);
  invariant(params.voyageId, "voyageId not found");
  const voyage = await getVoyage({ id: params.voyageId, userId });
  if (!voyage) {
    throw new Response("Not Found", { status: 404 });
  }
  return json({ voyage });
};

export default function VoyageDetailsPage() {
  const data = useLoaderData<typeof loader>().voyage;
  return (
    <Container>
      <Form
        method="put"
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
          {Object.entries(data).map(([key, value]) => (
            <Col
              style={{
                display:
                  key === "userId" ||
                  key === "id" ||
                  key === "createdAt" ||
                  key === "updatedAt" ||
                  key === "vesselId"
                    ? "none"
                    : "block",
              }}
              key={key}
              className=" mb-3 mt-3"
              sm={6}
              xs={12}
            >
              <label className="flex w-full flex-col gap-1">
                <span>{key}: </span>
                <input
                  type={typeof value === "string" ? "text" : "number"}
                  name={key}
                  className="flex-1 rounded-md border-2 border-blue-500 px-3 text-lg leading-loose"
                  defaultValue={value}
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
    return <div>Voyage not found, try again later</div>;
  }
  return <div>An unexpected error occurred: {error.statusText}</div>;
}