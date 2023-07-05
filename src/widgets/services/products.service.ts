import axios from "axios";

export const getProducts = {
  async getList() {
    const { data } = await axios.get(
      `https://api.byster.one/shop/website_product_list`
    );

    return data;
  },
};
