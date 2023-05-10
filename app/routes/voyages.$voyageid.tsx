import { LoaderArgs, json } from "@remix-run/node";
import {
  isRouteErrorResponse,
  useLoaderData,
  useRouteError,
} from "@remix-run/react";
import invariant from "tiny-invariant";
import { getVoyage } from "~/models/voyage.server";
import { requireUserId } from "~/session.server";

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
  const data = useLoaderData<typeof loader>();
  return <div>{JSON.stringify(data)}</div>;
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
