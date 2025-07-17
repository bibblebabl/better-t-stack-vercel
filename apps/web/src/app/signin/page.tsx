import { redirect } from "next/navigation";
import SignInForm from "@/components/sign-in-form";
import { getSession } from "@/lib/auth";

export default async function SignInPage() {
	const session = await getSession();

	if (session) {
		redirect("/dashboard");
	}

	return <SignInForm />;
}
