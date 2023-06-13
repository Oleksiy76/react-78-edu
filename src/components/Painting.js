import PropTypes from "prop-types";

export default function Painting(props) {
  const { url, title, price, authorName, quantity } = props;
  return (
    <div>
      <img src={url} alt={title} width="640" />
      <h2>{title}</h2>
      <p>
        Автор: <a href="">{authorName}</a>
      </p>
      <p>Цена: {price} кредитов</p>
          <p>Доступность: {quantity <= 10 ? "заканчивается" : "есть в наличии"}</p>
      <button type="button">Добавить в корзину</button>
    </div>
  );
}

Painting.propTypes = {
  url: PropTypes.string,
  title: PropTypes.string,
  price: PropTypes.number,
  authorName: PropTypes.string,
  quantity: PropTypes.number,
};
