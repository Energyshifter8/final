import type { Metadata } from "next";
import { Bricolage_Grotesque, Inter } from "next/font/google";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { LenisProvider } from "@/components/lenis-provider";
import { ViewTransitionListener } from "@/components/view-transition-listener";
import { siteConfig } from "@/content/site";
import "./globals.css";

const title = "Temuulen — Portfolio";
const description =
	"Freelance product designer & front-end developer based in UB.";

const fontHeading = Bricolage_Grotesque({
	variable: "--font-heading",
	subsets: ["latin"],
});

const fontBody = Inter({
	variable: "--font-body",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	metadataBase: new URL(siteConfig.url),
	title: {
		default: title,
		template: "%s — Temuulen",
	},
	description,
	alternates: {
		canonical: "/",
	},
	openGraph: {
		type: "website",
		locale: "en_US",
		url: "/",
		siteName: siteConfig.name,
		title,
		description,
	},
	twitter: {
		card: "summary_large_image",
		title,
		description,
	},
	robots: {
		index: true,
		follow: true,
	},
};

export default function RootLayout({ children }: LayoutProps<"/">) {
	return (
		<html
			lang="en"
			className={`${fontHeading.variable} ${fontBody.variable} h-full antialiased`}
		>
			<body className="flex min-h-full flex-col">
				<ViewTransitionListener />
				<LenisProvider>
					<Header />
					<main className="flex-1">{children}</main>
					<Footer />
				</LenisProvider>
			</body>
		</html>
	);
}
