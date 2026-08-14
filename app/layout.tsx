import type { Metadata } from "next";
import { Bricolage_Grotesque, Inter } from "next/font/google";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import "./globals.css";

const fontHeading = Bricolage_Grotesque({
	variable: "--font-heading",
	subsets: ["latin"],
});

const fontBody = Inter({
	variable: "--font-body",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Temuulen — Portfolio",
	description: "Freelance product designer & front-end developer based in UB.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
	return (
		<html
			lang="en"
			className={`${fontHeading.variable} ${fontBody.variable} h-full antialiased`}
		>
			<body className="flex min-h-full flex-col">
				<Header />
				<main className="flex-1">{children}</main>
				<Footer />
			</body>
		</html>
	);
}
