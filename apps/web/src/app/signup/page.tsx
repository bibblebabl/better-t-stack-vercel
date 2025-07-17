import { redirect } from "next/navigation";
import SignUpForm from "@/components/sign-up-form";
import { getSession } from "@/lib/auth";

export default async function SignUpPage() {
	const session = await getSession();

	if (session) {
		redirect("/dashboard");
	}

	return <SignUpForm />;
}
