import { headers } from "next/headers";

export async function getSession() {
	const headersList = await headers();
	const cookieHeader = headersList.get("cookie");

	if (!cookieHeader) {
		return null;
	}

	try {
		const response = await fetch(
			`${process.env.NEXT_PUBLIC_SERVER_URL}/api/auth/get-session`,
			{
				headers: {
					Cookie: cookieHeader,
				},
				credentials: "include",
			},
		);

		if (!response.ok) {
			return null;
		}

		const session = await response.json();
		return session;
	} catch (error) {
		console.error("Failed to get session:", error);
		return null;
	}
}
