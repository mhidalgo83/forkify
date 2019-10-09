import axios from "axios";

async function getResults(query) {
  const key = "c2a7cbfe6c5408e8440d4d14477cce0c";
  try {
    const res = await axios(
      `https://www.food2fork.com/api/search?key=${key}&q=${query}`
    );
    const recipes = res.data.recipes;
    console.log(recipes);
  } catch (err) {
    alert(err);
  }
}
getResults("pesto");
