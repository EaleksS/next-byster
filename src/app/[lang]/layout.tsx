import { Header } from "@/widgets";
import "../../styles/globals.css";
import "../../styles/reset.min.css";
import localFont from "next/font/local";
import { ReactQueryProvider } from "@/ReactQueryProvider";
import { i18n } from "@/i18-config";
import { ClientCookiesProvider } from "@/ClientCookiesProvider";
import { cookies } from "next/headers";

const myFont = localFont({
	src: "../../DIN Next W1G/dinnextw1g.otf",
	display: "swap",
});

export const metadata = {
	title: "Home | Byster",
	description:
		"Современного продукта для игр, котор гарантирует удобство, удовольствие и совершенство в игровом процессе.  предлагаем инновационные и надежные читы, которые помогут в наслаждаться игровым процессом и сделают его более захватывающи Каждый продукт нашей команды проходит тщательное тестирование, что гарантировать безопасность и стабильную работу. Наш софт легок использовании и удобен для любой игры. Уникальные функции обеспечива максимальный комфорт для игрока и улучшают его игровой опыт.",
};

export async function generateStaticParams() {
	return i18n.locales.map((locale) => ({ lang: locale }));
}

export default async function RootLayout({
	children,
	params,
}: {
	children: React.ReactNode;
	params: { lang: string };
}) {
	return (
		<ReactQueryProvider>
			<html lang={params.lang}>
				<meta
					property="og:image"
					content="https://s3.byster.one/server-byster-media/111.gif"
				></meta>
				<head>
					<link
						rel="apple-touch-icon"
						sizes="180x180"
						href="favicon/apple-touch-icon.png"
					/>
					<link
						rel="icon"
						type="image/png"
						sizes="32x32"
						href="favicon/favicon-32x32.png"
					/>
					<link
						rel="icon"
						type="image/png"
						sizes="16x16"
						href="favicon/favicon-16x16.png"
					/>
					<link rel="manifest" href="favicon/site.webmanifest" />
				</head>
				<body style={myFont.style}>
					<ClientCookiesProvider value={cookies().getAll()}>
						<Header lang={params.lang} />
						<main>{children}</main>
					</ClientCookiesProvider>
				</body>
			</html>
		</ReactQueryProvider>
	);
}
