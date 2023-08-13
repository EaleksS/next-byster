import { Locale } from "@/i18-config";
// import { defaultLocale } from "@/middleware";
import { About, Preview, Products, Reviews } from "@/widgets";

export default function Home({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  return (
    <>
      <Preview lang={lang} />
      <Products lang={lang} />
      <About lang={lang} />
      <Reviews lang={lang} />
    </>
  );
}
