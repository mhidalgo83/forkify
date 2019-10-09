import axios from "axios";

export default class Search {
  constructor(query) {
    this.query = query;
  }

  async getResults() {
    const key = "c2a7cbfe6c5408e8440d4d14477cce0c";
    try {
      const res = await axios(
        `https://www.food2fork.com/api/search?key=${key}&q=${this.query}`
      );
      this.result = res.data.recipes;
      //console.log(this.result);
    } catch (err) {
      alert(err);
    }
  }
}
