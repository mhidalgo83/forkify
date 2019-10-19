import Search from "./models/Search";
import Recipe from "./models/Recipe";
import * as searchView from "./views/searchView";
import { elements, renderLoader, clearLoader } from "./views/base";
//Global state of app
/*
-Search object
-Current recipe object
-Shopping list object
-Liked recipes
*/
const state = {};

//SEARCH CONTROLLER
const controlSearch = async () => {
  //get query from view
  const query = searchView.getInput();

  if (query) {
    // 2) new search object and add to state
    state.search = new Search(query);

    // 3) Prepare UI for results
    searchView.clearField();
    searchView.clearInput();
    renderLoader(elements.searchRes);

    // 4) Search for recipes
    await state.search.getResults();

    // 5) Render results to UI
    clearLoader();
    searchView.renderResults(state.search.result);
  }
};
elements.searchForm.addEventListener("submit", e => {
  e.preventDefault();
  controlSearch();
});
elements.searchResPages.addEventListener("click", e => {
  e.preventDefault();
  const btn = e.target.closest(".btn-inline");
  if (btn) {
    searchView.clearField();
    const goToPage = parseInt(btn.dataset.goto, 10);
    searchView.renderResults(state.search.result, goToPage);
  }
});

//RECIPE CONTROLLER
const r = new Recipe(35626);

r.getRecipe();
console.log(r);
