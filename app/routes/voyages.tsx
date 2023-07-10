import { LoaderArgs, json } from "@remix-run/node";
import {
  Link,
  Outlet,
  useLoaderData,
  NavLink,
  useRouteError,
  isRouteErrorResponse,
} from "@remix-run/react";
import { Form } from "react-bootstrap";
import { userVoyageList } from "~/models/voyage.server";
import { requireUserId } from "~/session.server";
import { useUser } from "~/utils";

export const loader = async ({ request }: LoaderArgs) => {
  const userId = await requireUserId(request);
  const userVoyages = await userVoyageList({ userId });
  return json({ userVoyages });
};
export default function oyages() {
  const data = useLoaderData<typeof loader>();
  const user = useUser();
  return (
    <div className="flex h-full min-h-screen flex-col">
      <header className="flex items-center justify-between bg-slate-800 p-4 text-white">
        <h1 className="text-3xl font-bold">
          <Link to=".">Voyages</Link>
        </h1>
        <p>{user.email}</p>
        <button className="rounded bg-slate-600 px-4 py-2 text-blue-100 hover:bg-blue-500 active:bg-blue-600">
          <p>
            <Link to="./locations">Locations</Link>
          </p>
        </button>

        <Form action="/logout" method="post">
          <button
            type="submit"
            className="rounded bg-slate-600 px-4 py-2 text-blue-100 hover:bg-blue-500 active:bg-blue-600"
          >
            Logout
          </button>
        </Form>
      </header>

      <main className="flex h-full bg-white">
        <div className="h-full w-80 border-r bg-gray-50">
          <Link to="new" className="block p-4 text-xl text-blue-500">
            + New Voyage
          </Link>

          <hr />

          {data.userVoyages.length === 0 ? (
            <p className="p-4">No voyages yet</p>
          ) : (
            <ol>
              {data.userVoyages.map((voyage) => (
                <li key={voyage.id}>
                  <NavLink
                    className={({ isActive }) =>
                      `block border-b p-4 text-xl ${isActive ? "bg-white" : ""}`
                    }
                    to={voyage.id}
                  >
                    📝 {voyage.vesselName}
                  </NavLink>
                </li>
              ))}
            </ol>
          )}
        </div>

        <div className="flex-1 p-6">
          <Outlet />
        </div>
      </main>
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
