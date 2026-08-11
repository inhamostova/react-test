import PropTypes from "prop-types";
import { Painting } from "./Painting";
import css from './PaintingList.module.css'


export const PaintingsList = ({ paintings }) => {
    return (
     <div className={css.paintingList}>
         {paintings.map(painting => {
             return <Painting key={painting.id} painting={painting} />
         })}
    </div >)
}

PaintingsList.propTypes = {
    paintings: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            url: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
            price: PropTypes.number.isRequired,
            author: PropTypes.shape({
                tag: PropTypes.string.isRequired,
                url: PropTypes.string.isRequired,
            }),
            quantity: PropTypes.number.isRequired
        })
    )
}