import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function Dashboard() {
  const cookieStore = await cookies();
  const token = cookieStore.get("loginToken")?.value || "";

  if (!token) {
    return redirect("/");
  } else {
    console.log("Authenticated user with token:");
    redirect("/dashboard/overview");
  }
  
}
