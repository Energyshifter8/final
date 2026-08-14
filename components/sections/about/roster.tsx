import { Badge } from "@/components/ui/badge";
import { roster } from "@/content/roster";

export function Roster() {
	return (
		<div className="flex flex-col gap-4">
			<p className="text-xs font-medium tracking-widest text-muted-foreground uppercase">
				Past Clients
			</p>
			<ul className="flex flex-wrap gap-2">
				{roster.map((client) => (
					<li key={client}>
						<Badge variant="outline" className="text-sm">
							{client}
						</Badge>
					</li>
				))}
			</ul>
		</div>
	);
}
