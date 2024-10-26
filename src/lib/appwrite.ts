import "server-only";

import {
	Client,
	Account,
	Storage,
	Users,
	Databases,
} from "node-appwrite";

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
