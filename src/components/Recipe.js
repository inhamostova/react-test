import PropTypes from 'prop-types';
import { BsClock } from 'react-icons/bs';
import { HiOutlineChartPie, HiOutlineChartBar } from 'react-icons/hi2';

export const Recipe = ({
  recipe: { name, time, servings, calories, image },
}) => {
  return (
    <li>
      <h2>{name}</h2>
      <img src={image} alt={name} width={320}></img>
      <div>
        <p>
          <BsClock /> {time} time
        </p>
        <p>
          <HiOutlineChartPie /> {servings} servings
        </p>
        <p>
          <HiOutlineChartBar /> {calories} calories
        </p>
      </div>
      <div>
        <h3>Difficulty</h3>
        <span>Easy</span>
        <span>Medium</span>
        <span>Hard</span>
      </div>
    </li>
  );
};

Recipe.propTypes = {
  recipe: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
    servings: PropTypes.number.isRequired,
    calories: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    difficulty: PropTypes.oneOf(['easy', 'medium', 'hard']),
  }).isRequired,
};
