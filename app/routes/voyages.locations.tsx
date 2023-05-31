import { Location } from "@prisma/client";
import { LoaderArgs } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { Container, Row, Table } from "react-bootstrap";

import { json } from "react-router-dom";
import { getVoyageLocations } from "~/models/location.server";

export const loader = async ({ request }: LoaderArgs) => {
  const locations = await getVoyageLocations();
  return json({ locations });
};

export default function voyageLocations() {
  const data = useLoaderData<typeof loader>();
  return (
    <Container>
      <Row>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Country</th>
              <th>Longitude</th>
              <th>Latitude</th>
              <th>Port</th>
            </tr>
          </thead>
          <tbody>
            {data &&
              data.locations &&
              data.locations.length > 0 &&
              data.locations.map((location: Partial<Location>) => (
                <tr>
                  <td>{location.name}</td>
                  <td>{location.longitude}</td>
                  <td>{location.latitude}</td>
                  <td>{location.port}</td>
                </tr>
              ))}
          </tbody>
        </Table>
      </Row>
    </Container>
  );
}
