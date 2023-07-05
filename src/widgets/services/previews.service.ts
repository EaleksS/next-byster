import axios from "axios";

export const getPreviews = {
  async getPreviewsList(begin: number, end: number) {
    const { data } = await axios.get(
      `https://api.byster.one/site/comments?offset=${begin}&limit=${end}`
    );

    return data;
  },
};
