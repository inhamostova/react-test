import PropTypes from 'prop-types';
import { Recipe } from './Recipe';

export const RecipeList = ({ recipes }) => {
  return (
    <ul>
      {recipes.map(recipe => (
        <Recipe key={recipe.id} recipe={recipe} />
      ))}
    </ul>
  );
};

RecipeList.propTypes = {
  recipes: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};
