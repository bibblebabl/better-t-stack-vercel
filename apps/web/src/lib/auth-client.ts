import { createAuthClient } from "better-auth/react";

export const authClient = createAuthClient({
	baseURL: "", // Use relative URLs via proxy
});
