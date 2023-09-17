import { Locale } from "@/i18-config";
import { OurCheats } from "@/widgets";

export default function Games({
	params: { lang },
}: {
	params: { lang: Locale };
}) {
	return (
		<>
			<OurCheats lang={lang} />
		</>
	);
}
