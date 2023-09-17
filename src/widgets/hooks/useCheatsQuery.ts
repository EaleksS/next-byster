import { getCheats } from "../services/cheats.service";
import { ICheats } from "../interface/cheats.interface";
import { useQuery } from "@tanstack/react-query";

export const useCheatsQuery = (lang = "RUB") => {
	const { data, isLoading } = useQuery({
		queryKey: [`cheats`, lang],
		queryFn: () => getCheats.getCheatsList(lang),
		keepPreviousData: true,
	});

	let newData: ICheats[] = [];

	if (!isLoading) {
		Object.values(data).forEach((el: any) => newData.push(el));
	}

	return { isLoading, newData };
};
