import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { createWorkspacesSchema } from "../schemas";
import { z } from "zod";
import {
	Card,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";

interface CreateWorkspaceFormProps {
	onCancel: () => void;
}

export const CreateWorkspaceForm = ({
	onCancel,
}: CreateWorkspaceFormProps) => {
	const form = useForm<z.infer<typeof createWorkspacesSchema>>({
		resolver: zodResolver(createWorkspacesSchema),
		defaultValues: {
			name: "",
		},
	});

	const onSubmit = (
		values: z.infer<typeof createWorkspacesSchema>,
	) => {
		console.log("Create Workspace Form submitted: ", values);
	};

	return (
		<Card className="w-full h-full border-none shadow-none">
			<CardHeader className="flex p-7">
				<CardTitle className="text-xl font-bold">
					Create a new workspace
				</CardTitle>
			</CardHeader>
		</Card>
	);
};
