import axios from "axios";

export const getCheats = {
	async getCheatsList(lang = "RUB") {
		const { data } = await axios.get(
			`https://api-hacks.byster.one/site/products_list?currency=${lang}`
		);

		return data;
	},
};
