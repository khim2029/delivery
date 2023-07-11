import { LoaderArgs } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { Card, Col, Container, Row } from "react-bootstrap";
import invariant from "tiny-invariant";
import { getVoyageInfo } from "~/models/voyage.server";

export const loader = async ({ params }: LoaderArgs) => {
  invariant(params.voyageId, "voyageId not found");
  const voyage = await getVoyageInfo({ id: params.voyageId });
  if (!voyage) {
    throw new Response("Not Found", { status: 404 });
  }
  return voyage;
};

export default function voyageInfo() {
  const data = useLoaderData<typeof loader>();
  return (
    <Container style={{ marginTop: "25px" }}>
      <Row>
        <Col>
          <Card>
            <Card.Header>Voyage Information</Card.Header>
            <Card.Body>This is some text within a card body.</Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Header>Latest position</Card.Header>
            <Card.Body>This is some text within a card body.</Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
