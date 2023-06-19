import { Header } from "@/widgets";
import "../styles/globals.css";
import "../styles/reset.min.css";
import { Titillium_Web } from "next/font/google";

const titillium = Titillium_Web({
  weight: ["300", "400", "600", "700"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Home | Byster",
  description: "Generated by create byster web site",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body className={titillium.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
