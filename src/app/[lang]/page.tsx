import { Locale } from "@/i18-config";
// import { defaultLocale } from "@/middleware";
import { ListCheats, MainSlider, Reviews } from "@/widgets";

export default function Home({
	params: { lang },
}: {
	params: { lang: Locale };
}) {
	return (
		<>
			<MainSlider lang={lang} />
			<ListCheats lang={lang} />
			<Reviews lang={lang} />
		</>
	);
}
