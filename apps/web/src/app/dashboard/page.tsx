import { redirect } from "next/navigation";
import { getSession } from "@/lib/auth";

export default async function Dashboard() {
	const session = await getSession();

	if (!session) {
		redirect("/signin");
	}

	return (
		<div>
			<h1>Dashboard</h1>
			<p>Welcome {session.user.name}</p>
			<p>Email: {session.user.email}</p>
		</div>
	);
}
