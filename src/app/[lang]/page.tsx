import { About, Preview, Products, Reviews } from "@/widgets";

export default function Home({ params }: { params: { lang: string } }) {
  return (
    <>
      <Preview lang={params.lang} />
      <Products lang={params.lang} />
      <About lang={params.lang} />
      <Reviews lang={params.lang} />
    </>
  );
}
