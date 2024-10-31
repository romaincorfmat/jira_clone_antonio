import { getCurrent } from "@/features/auth/queries";
import { redirect } from "next/navigation";
import React from "react";

const Workspace = async () => {
	const user = await getCurrent();
	if (!user) {
		redirect("/sign-in");
	}
	return <div>Workspace Id</div>;
};

export default Workspace;
