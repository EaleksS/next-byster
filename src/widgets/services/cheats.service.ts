import axios from "axios";

export const getCheats = {
  async getCheatsList() {
    const { data } = await axios.get(
      `https://api-hacks.byster.one/site/products_list`
    );

    return data;
  },
};
