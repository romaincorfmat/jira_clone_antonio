import { cookies } from "next/headers";
import { Account, Client } from "node-appwrite";

import { AUTH_COOKIE } from "./constants";

export const getCurrent = async () => {
	try {
		const client = new Client()
			.setEndpoint(process.env.NEXT_PUBLIC_APPWITE_ENDPOINT!)
			.setProject(process.env.NEXT_PUBLIC_APPWITE_PROJECT!);

		const session = await cookies().get(AUTH_COOKIE);

		if (!session) return null;
		client.setSession(session.value);
		const account = new Account(client);

		return await account.get();
	} catch (error) {
		console.log("An error happened actions.ts", error);
		return null;
	}
};
