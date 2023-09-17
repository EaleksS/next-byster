import { CheatInfo } from "@/widgets";

export default function Game({
	params: { id, lang },
}: {
	params: { id: string; lang: string };
}) {
	return (
		<div>
			<CheatInfo id={id} lang={lang} />
		</div>
	);
}
