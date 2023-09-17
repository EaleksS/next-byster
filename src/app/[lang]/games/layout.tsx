import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Games | Byster",
};

export default function GamesLayout({
	children, // will be a page or nested layout
}: {
	children: React.ReactNode;
}) {
	return <>{children}</>;
}
