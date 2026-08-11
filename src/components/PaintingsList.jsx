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