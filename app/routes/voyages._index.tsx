import { LoaderArgs, fetch, json } from "@remix-run/node";
import { userVoyageList } from "~/models/voyage.server";
import { requireUserId } from "~/session.server";

export const loader = async ({ request }: LoaderArgs) => {
  const userId = await requireUserId(request);
  const userVoyages = await userVoyageList({ userId });
  return json({ userVoyages });
};
export default function VoyageIndexPage() {
  return <div></div>;
}
