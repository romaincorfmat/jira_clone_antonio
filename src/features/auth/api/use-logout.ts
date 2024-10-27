import {
	useMutation,
	useQueryClient,
} from "@tanstack/react-query";
import { InferResponseType } from "hono";

//! Uncomment if needed in the future
// import { InferRequestType } from "hono";

import { client } from "@/lib/rpc";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

type ResponseType = InferResponseType<
	(typeof client.api.auth.logout)["$post"]
>;

//! Uncomment if needed in the future
// type RequestType = InferRequestType<
// 	(typeof client.api.auth.logout)["$post"]
// >;

export const useLogout = () => {
	const router = useRouter();
	const queryClient = useQueryClient();
	const mutation = useMutation<ResponseType, Error>({
		mutationFn: async () => {
			const response = await client.api.auth.logout["$post"]();

			if (!response.ok) {
				throw new Error("Failed to logout");
			}

			return await response.json();
		},
		onSuccess: () => {
			toast.success("Logged out successfully");
			router.refresh();
			queryClient.invalidateQueries({ queryKey: ["current"] });
			queryClient.invalidateQueries({ queryKey: ["workspaces"] });
		},
		onError: () => {
			toast.error("Failed to log out");
		},
	});

	return mutation;
};
