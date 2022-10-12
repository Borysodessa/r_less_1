import {Recipe} from "./recipe/Recipe";
import recipes from "recipes.json"
export const App = () => {
  return(
  <>
    <Recipe recipe={recipes[0]}/>
  </>
  );
};
