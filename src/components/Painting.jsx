import css from './Painting.module.css'


export const Painting = ({ painting: { id, url, title, price, author, quantity } }) => {
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