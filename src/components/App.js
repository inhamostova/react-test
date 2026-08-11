// import { RecipeList } from './RecipeList';
import { PaintingsList } from './PaintingsList';

// import recipes from '../recipes.json';
import paintings from 'paintings.json';
console.log(paintings);

export const App = () => {
  return <>{<PaintingsList paintings={paintings} />}</>;
};
