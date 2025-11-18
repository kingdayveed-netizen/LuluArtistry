import type { Metadata } from "next";
import "./globals.css";
import Header from "@/layouts/Header";
import Footer from "@/layouts/Footer";
import Nav from "@/layouts/Nav";
import WhatsAppButton from "@/components/common/WhatsAppButton";

export const metadata: Metadata = {
	title: "Lulu Artistry",
	description: "Lulu Artistry",
	icons: {
		icon: "/lulu.png",
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body className={`antialiased`}>
				<Header />
				<Nav />
				{children}
				<Footer />
				<WhatsAppButton />
			</body>
		</html>
	);
}
