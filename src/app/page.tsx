import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Home() {
	return (
		<div>
			<Button size="lg">Primary</Button>
			<Button
				variant="secondary"
				size="lg">
				Secondary
			</Button>

			<Button variant="destructive">destructive</Button>

			<Button variant="ghost">ghost</Button>

			<Button variant="muted">muted</Button>

			<Button variant="outline">outline</Button>
			<Input />
			<Button variant="teritary">teritary</Button>
		</div>
	);
}
