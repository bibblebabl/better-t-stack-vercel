import { expo } from "@better-auth/expo";
import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { db } from "../db";
import * as schema from "../db/schema/auth";

export const auth = betterAuth({
	database: drizzleAdapter(db, {
		provider: "pg",

		schema: schema,
	}),
	trustedOrigins: [process.env.CORS_ORIGIN || "", "my-better-t-app://"],
	emailAndPassword: {
		enabled: true,
	},
	secret: process.env.BETTER_AUTH_SECRET,
	baseURL: process.env.BETTER_AUTH_URL,
	// Cross-domain cookie config for production (Vercel deployment)
	...(process.env.BETTER_AUTH_URL?.includes("vercel.app") && {
		cookies: {
			sessionToken: {
				name: "better-auth.session_token",
				httpOnly: true,
				sameSite: "none",
				secure: true,
				maxAge: 60 * 60 * 24 * 7, // 7 days
			},
		},
	}),
	plugins: [expo()],
});
