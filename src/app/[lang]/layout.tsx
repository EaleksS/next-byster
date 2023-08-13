import { Header } from "@/widgets";
import "../../styles/globals.css";
import "../../styles/reset.min.css";
import localFont from "next/font/local";
import { ReactQueryProvider } from "@/ReactQueryProvider";
import { i18n } from "@/i18-config";

const myFont = localFont({
  src: "../../DIN Next W1G/dinnextw1g.otf",
  display: "swap",
});

export const metadata = {
  title: "Home | Byster",
  description:
    "Это многофункциональный бот, который имеет большое количество функций. Бустер хилит, танчит, наносит урон. Отслеживает ваши проки, прожимает тринькеты, профессии, дефается, меняет ротацию в зависимости от приоритета и фазы босса, для большей полезности в рейде. Присутствуют функции автобафа, аое и соло режима, прожимок и дефов, авто-снятие оружие на леди, диспел и многое другое, заинтересовался? Жми на кнопку ниже!",
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
          <Header lang={params.lang} />
          {children}
        </body>
      </html>
    </ReactQueryProvider>
  );
}
