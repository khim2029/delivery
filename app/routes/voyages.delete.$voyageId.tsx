import { ActionArgs, LoaderArgs } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { Stack } from "react-bootstrap";
import {
  Form,
  isRouteErrorResponse,
  redirect,
  useRouteError,
} from "react-router-dom";
import invariant from "tiny-invariant";
import { deleteVoyage, getVoyage } from "~/models/voyage.server";
import { requireUserId } from "~/session.server";

export const loader = async ({ params, request }: LoaderArgs) => {
  const userId = await requireUserId(request);
  invariant(params.voyageId, "voyageId not found");
  const voyage = await getVoyage({ id: params.voyageId, userId });
  if (!voyage) {
    throw new Response("Not Found", { status: 404 });
  }
  return voyage;
};

export const action = async ({ params, request }: ActionArgs) => {
  const userId = await requireUserId(request);
  invariant(params.voyageId, "voyageId not found");

  await deleteVoyage({ id: params.voyageId, userId });

  return redirect("/voyages");
};

export default function () {
  const data = useLoaderData<typeof loader>();
  return (
    <div>
      <Stack direction="horizontal" gap={3}>
        <div>
          <h3 className="text-2xl font-bold">{data.vesselName}</h3>
        </div>
        <div className="ms-auto">
          <Form method="post">
            <button
              type="submit"
              className="rounded bg-red-500 px-4 py-2 text-white hover:bg-red-600 focus:bg-red-400"
            >
              Delete
            </button>
          </Form>
        </div>
      </Stack>
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

  if (error.status === 404) {
    return <div>Note not found</div>;
  }

  return <div>An unexpected error occurred: {error.statusText}</div>;
}
