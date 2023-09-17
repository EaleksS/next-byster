import { Metadata } from "next";

export const metadata: Metadata = {
	title: "WOW | Byster",
	description:
		"Это многофункциональный бот с следующими возможностями: /n ● Работает только на пиратских серверах 3.3.5 /n ● Поддержка ротаций на Sirus /n ● Хилит, танчит, наносит урон /n ● Отслеживает проки, прожимает тринькеты /n ● Поддерживает различные профессии, дефается /n ● Меняет ротацию в зависимости от приоритета и фазы босса ● /n Функции автобафа, аое и соло режима /n ● Автоматическое снятие оружия на леди, диспел /n ● Многие другие утлиты, которые помогут вам в обычной игре",
};

export default function GamesLayout({
	children, // will be a page or nested layout
}: {
	children: React.ReactNode;
}) {
	return <>{children}</>;
}
