import type { MetaFunction } from "@remix-run/node";
import { redirect } from "@remix-run/node";
import { getUser } from "~/utils/session.server";

export const meta: MetaFunction = () => {
  return [
    { title: "Dashboard" },
    { name: "App", content: "Welcome to dashboard!" },
  ];
};

export const loader = async ({ request }: { request: Request }) => {
  const user = await getUser(request);
  if (!user) {
    return redirect("/login");
  }
  else {
    return redirect("/dashboard");
  }
}



export default function Index() {
  return (
    <>
    </>
  );
}
