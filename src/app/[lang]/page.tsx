import { defaultLocale } from "@/middleware";
import { About, Preview, Products, Reviews } from "@/widgets";

export default function Home({ params }: { params: { lang: string } }) {
  return (
    <>
      <Preview lang={params.lang ?? defaultLocale} />
      <Products lang={params.lang ?? defaultLocale} />
      <About lang={params.lang ?? defaultLocale} />
      <Reviews lang={params.lang ?? defaultLocale} />
    </>
  );
}
