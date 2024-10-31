import "server-only";

import {
	Client,
	Account,
	Storage,
	Users,
	Databases,
} from "node-appwrite";
import { cookies } from "next/headers";
import { AUTH_COOKIE } from "@/features/auth/constants";

export async function createSessionClient() {
	const client = new Client()
		.setEndpoint(process.env.NEXT_PUBLIC_APPWITE_ENDPOINT!)
		.setProject(process.env.NEXT_PUBLIC_APPWITE_PROJECT!);

	const session = await cookies().get(AUTH_COOKIE);

	if (!session || !session.value) {
		throw new Error("Unauthorized");
	}

	client.setSession(session.value);

	return {
		get account() {
			return new Account(client);
		},
		get databases() {
			return new Databases(client);
		},
	};
}
export async function createAdminClient() {
	const client = new Client()
		.setEndpoint(process.env.NEXT_PUBLIC_APPWITE_ENDPOINT!)
		.setProject(process.env.NEXT_PUBLIC_APPWITE_PROJECT!)
		.setKey(process.env.NEXT_APPWITE_KEY!);

	return {
		get account() {
			return new Account(client);
		},
	};
}
