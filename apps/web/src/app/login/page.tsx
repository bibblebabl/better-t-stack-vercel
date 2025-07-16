"use client";

import { redirect } from "next/navigation";
import { useState } from "react";
import SignInForm from "@/components/sign-in-form";
import SignUpForm from "@/components/sign-up-form";
import { authClient } from "@/lib/auth-client";

export default function LoginPage() {
	const [showSignIn, setShowSignIn] = useState(false);

	const { data: session } = authClient.useSession();

	if (session) {
		redirect("/dashboard");
	}

	return showSignIn ? (
		<SignInForm onSwitchToSignUp={() => setShowSignIn(false)} />
	) : (
		<SignUpForm onSwitchToSignIn={() => setShowSignIn(true)} />
	);
}
