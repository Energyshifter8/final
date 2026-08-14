const sections = [
	"Header",
	"Hero",
	"Work",
	"Work case study",
	"Services",
	"About",
	"Contact / Footer",
];

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col items-center justify-center gap-4 p-16">
			<h1 className="text-2xl font-semibold">Portfolio sections</h1>
			<ul className="flex flex-col gap-2 text-center">
				{sections.map((section) => (
					<li key={section}>{section}</li>
				))}
			</ul>
		</main>
	);
}
