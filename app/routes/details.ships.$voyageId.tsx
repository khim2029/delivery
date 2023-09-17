import { LoaderArgs } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import {
  Card,
  Col,
  Container,
  ListGroup,
  ProgressBar,
  Row,
  Stack,
} from "react-bootstrap";
import invariant from "tiny-invariant";
import { findLocationsCordinates } from "~/models/location.server";
import { getVoyageInfo } from "~/models/voyage.server";
import {
  calculateLocalTimeFromLogitudeAndLatitude,
  calculateVoyageProgress,
  distanceTogo,
  distanceTravelled,
  generateRandomNumbers,
  getVoyageInitialLocation,
  getVoyageLastLocation,
  removeSpaces,
} from "~/utils";

export const loader = async ({ params }: LoaderArgs) => {
  invariant(params.voyageId, "voyageId not found");
  let location:
    | {
        port: string | null;
        name: string;
        latitude: string;
        longitude: string;
      }[]
    | undefined;
  const voyage = await getVoyageInfo({ id: params.voyageId });
  if (!voyage) {
    throw new Response("Not Found", { status: 404 });
  }
  const presentLocation = voyage.presentLocation;
  if (presentLocation) {
    location = await findLocationsCordinates([removeSpaces(presentLocation)]);
  }
  const speed = generateRandomNumbers(20, 5);
  return { voyage, location, speed };
};

export default function VoyageInfo() {
  const data = useLoaderData<typeof loader>();
  const location = data.location ? data.location[0] : undefined;
  const speed = data.speed;
  const {
    vesselLocations,
    presentLocation,
    departureTime,
    arrivalTime,
    voyageDistance,
    voyageState,
    navigationalStatus,
    imo,
    vesselName,
    mmsi,
    callSign,
    flag,
    grossTonnage,
    summerDWT,
    length,
    breadth,
    yearBuilt,
    homePort,
    classificationSociety,
    builder,
    owner,
    manager,
    note,
  } = data.voyage;
  return (
    <Container style={{ marginTop: "25px" }}>
      <Row>
        <Col>
          <Card>
            <Card.Header>Voyage Information</Card.Header>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <Stack direction="horizontal" gap={3}>
                  <span style={{ fontWeight: "bold" }}>
                    {getVoyageInitialLocation(vesselLocations)}
                  </span>
                  <span className="ms-auto">
                    {getVoyageLastLocation(vesselLocations)}
                  </span>
                </Stack>
                <div style={{ marginTop: "10px" }}>
                  <ProgressBar
                    now={calculateVoyageProgress(
                      vesselLocations,
                      presentLocation!
                    )}
                    label={`${presentLocation}`}
                  />
                </div>
                <Stack
                  style={{ marginTop: "10px" }}
                  direction="horizontal"
                  gap={3}
                >
                  <small>
                    <span style={{ fontWeight: "bold" }}>ATD: </span>
                    {departureTime}
                  </small>

                  <small className="ms-auto">
                    <span style={{ fontWeight: "bold" }}>ETA: </span>
                    {arrivalTime}
                  </small>
                </Stack>
              </ListGroup.Item>
              <ListGroup.Item>
                <p>
                  Voyage State:{" "}
                  <span style={{ fontWeight: "bold" }}>{voyageState}</span>
                </p>
              </ListGroup.Item>
              <ListGroup.Item>
                <p>
                  Calculated ATD:{" "}
                  <span style={{ fontWeight: "bold" }}>{departureTime}</span>
                </p>
              </ListGroup.Item>
              <ListGroup.Item>
                <p>
                  Calculated ETA:{" "}
                  <span style={{ fontWeight: "bold" }}>{arrivalTime}</span>
                </p>
              </ListGroup.Item>
              <ListGroup.Item>
                <p>
                  Distance Travelled:{" "}
                  <span style={{ fontWeight: "bold" }}>
                    {" "}
                    {distanceTravelled(
                      vesselLocations,
                      presentLocation!,
                      voyageDistance
                    )}
                  </span>
                </p>
              </ListGroup.Item>
              <ListGroup.Item>
                <p>
                  Distance to Go:{" "}
                  <span style={{ fontWeight: "bold" }}>
                    {" "}
                    {distanceTogo(
                      vesselLocations,
                      presentLocation!,
                      voyageDistance
                    )}
                  </span>
                </p>
              </ListGroup.Item>
              <ListGroup.Item>
                <p>
                  Total Voyage Distance:{" "}
                  <span style={{ fontWeight: "bold" }}>{voyageDistance}</span>
                </p>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Header className="card-header">Latest position</Card.Header>
            <ListGroup variant="flush">
              <ListGroup.Item>
                Vessel Local Time:{" "}
                <span style={{ fontWeight: "bold" }}>
                  {" "}
                  {location
                    ? calculateLocalTimeFromLogitudeAndLatitude(
                        location.longitude
                      )
                    : ""}
                </span>
              </ListGroup.Item>
              <ListGroup.Item>
                Current Port:
                <span style={{ fontWeight: "bold" }}> {location?.port}</span>
              </ListGroup.Item>
              <ListGroup.Item>
                Longitude/Latitude:
                <span style={{ fontWeight: "bold", color: "rgb(0, 157, 255)" }}>
                  {" "}
                  {`${location?.longitude}° / ${location?.latitude}°`}
                </span>
              </ListGroup.Item>
              <ListGroup.Item>
                Navigational Status:{" "}
                <span style={{ fontWeight: "bold" }}>
                  {" "}
                  {navigationalStatus}
                </span>
              </ListGroup.Item>
              <ListGroup.Item>
                Speed/Course:{" "}
                <span style={{ fontWeight: "bold" }}> {speed} knots</span>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
      <Row style={{ marginTop: "20px" }}>
        <Col>
          <Card>
            <Card.Header>Summary</Card.Header>
            <Card.Body>
              <Card.Title>Where is this Ship</Card.Title>
              <Card.Text>
                <p>{`Crude Oil Tanker ${vesselName} is currently located at ${presentLocation} at position ${location?.longitude}° N, ${location?.latitude} E as reported by MarineTraffic Terrestrial Automatic Identification System on 2023-07-12 07:43 LT (UTC +2).
              `}</p>
                <p
                  style={{
                    fontWeight: "bold",
                    marginTop: "5px",
                    marginBottom: "5px",
                  }}
                >
                  Where is this vessel going?{" "}
                </p>
                <p>{`The vessel departed from ${getVoyageInitialLocation(
                  vesselLocations
                )} on ${departureTime} and is currently sailing at ${speed} knots with North direction heading to ${getVoyageLastLocation(
                  vesselLocations
                )}, TR with reported Estimated Time of Arrival at ${arrivalTime} local time.
              `}</p>
                <p
                  style={{
                    fontWeight: "bold",
                    marginTop: "5px",
                    marginBottom: "5px",
                  }}
                >
                  What kind of ship is this?
                </p>
                <p>{` ${vesselName} (${imo}) is a Crude Oil Tanker that was built in ${yearBuilt} and is sailing under the flag of ${flag}. 
              Her carrying capacity is ${summerDWT} t DWT and her current draught is reported to be ${length} meters. Her length overall (LOA) is ${length} meters and her width is ${breadth} meters.`}</p>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Header>Vessel Information</Card.Header>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <p>
                  IMO: <span style={{ fontWeight: "bold" }}>{imo}</span>
                </p>
              </ListGroup.Item>
              <ListGroup.Item>
                <p>
                  Name:
                  <span style={{ fontWeight: "bold" }}>
                    {" "}
                    {vesselName.toUpperCase()}
                  </span>
                </p>
              </ListGroup.Item>
              <ListGroup.Item>
                <p>Vessel Type: </p>
              </ListGroup.Item>
              <ListGroup.Item>
                <p>
                  Navigational Status:{" "}
                  <span style={{ fontWeight: "bold" }}>
                    {" "}
                    {navigationalStatus}
                  </span>{" "}
                </p>
              </ListGroup.Item>
              <ListGroup.Item>
                <p>
                  MMSI: <span style={{ fontWeight: "bold" }}>{mmsi}</span>
                </p>
              </ListGroup.Item>
              <ListGroup.Item>
                <p>
                  Call Sign:{" "}
                  <span style={{ fontWeight: "bold" }}>{callSign}</span>
                </p>
              </ListGroup.Item>
              <ListGroup.Item>
                <p>
                  Flag: <span style={{ fontWeight: "bold" }}>{flag}</span>
                </p>
              </ListGroup.Item>
              <ListGroup.Item>
                <p>
                  Gross Tonnage:{" "}
                  <span style={{ fontWeight: "bold" }}>{grossTonnage}</span>
                </p>
              </ListGroup.Item>
              <ListGroup.Item>
                <p>
                  Summer DWT:{" "}
                  <span style={{ fontWeight: "bold" }}>{summerDWT}</span>
                </p>
              </ListGroup.Item>
              <ListGroup.Item>
                <p>Length Overall x Breadth Extreme: </p>
              </ListGroup.Item>
              <ListGroup.Item>
                <p>
                  Year Built:{" "}
                  <span style={{ fontWeight: "bold" }}>{yearBuilt}</span>
                </p>
              </ListGroup.Item>
              <ListGroup.Item>
                <p>
                  Home Port:{" "}
                  <span style={{ fontWeight: "bold" }}>{homePort}</span>
                </p>
              </ListGroup.Item>
              <ListGroup.Item>
                <p>
                  Classification Society:{" "}
                  <span style={{ fontWeight: "bold" }}>
                    {classificationSociety}
                  </span>
                </p>
              </ListGroup.Item>
              <ListGroup.Item>
                <p>
                  Builder: <span style={{ fontWeight: "bold" }}>{builder}</span>
                </p>
              </ListGroup.Item>
              <ListGroup.Item>
                <p>
                  Owner: <span style={{ fontWeight: "bold" }}>{owner}</span>
                </p>
              </ListGroup.Item>
              <ListGroup.Item>
                <p>
                  Manager: <span style={{ fontWeight: "bold" }}>{manager}</span>
                </p>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
