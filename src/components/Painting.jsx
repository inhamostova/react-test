import PropTypes from 'prop-types'
import css from './Painting.module.css'


export const Painting = ({ painting: { url, title, price, author, quantity } }) => {
    return <div>
        <img src={url} alt={title} width={300}/>
        <h2 className={css.title}>{ title}</h2>
        <div>
            <p>{ price}</p>
            <p><a href={author.url}>{ author.tag}</a></p>
            <p>{ quantity < 10 ? "almost soldout" : "in stock"}</p>
        </div>
    </div>
}

Painting.propTypes = {
    painting: PropTypes.shape({
            url: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
            price: PropTypes.number.isRequired,
            author: PropTypes.shape({
                tag: PropTypes.string.isRequired,
                url: PropTypes.string.isRequired,
            }),
            quantity: PropTypes.number.isRequired
        })
} 

