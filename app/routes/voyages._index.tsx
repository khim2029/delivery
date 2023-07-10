import { LoaderArgs, fetch, json } from "@remix-run/node";
import { Button, Stack } from "react-bootstrap";
import {
  Form,
  isRouteErrorResponse,
  useLoaderData,
  useRouteError,
} from "@remix-run/react";
import { userVoyageList } from "~/models/voyage.server";
import { requireUserId } from "~/session.server";
import { FormEvent } from "react";

export const loader = async ({ request }: LoaderArgs) => {
  const userId = await requireUserId(request);
  const userVoyages = await userVoyageList({ userId });
  return json({ userVoyages });
};
export default function VoyageIndexPage() {
  const data = useLoaderData<typeof loader>();
  const handleSubmit = (vesselId: string, e?: FormEvent<HTMLFormElement>) => {
    e?.preventDefault();
    new Promise<void>((resolve, reject) => {
      fetch(`voyages/${vesselId}`, { method: "delete" })
        .then((response) => {
          if (response) {
            resolve();
          }
        })
        .catch((error) => console.error(error));
    }).catch(() => {
      console.error("Deletion failed");
    });
  };
  return (
    <div>
      {data.userVoyages.length === 0 ? (
        <p className="p-4">No voyages yet</p>
      ) : (
        <div>
          {data.userVoyages.map((voyage) => (
            <Stack direction="horizontal" gap={3} key={voyage.id}>
              <span>
                {voyage.userId}, {voyage.vesselName}
              </span>
              <span className="mb-2 ms-auto mt-2">
                <Form onSubmit={() => handleSubmit(voyage.id)}>
                  <Button
                    className="btn-sm"
                    type="submit"
                    variant="outline-danger"
                  >
                    Delete
                  </Button>
                </Form>
              </span>
            </Stack>
          ))}
        </div>
      )}
    </div>
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
