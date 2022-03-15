// import { Link } from "react-router-dom";
import { PRODUCT } from "../../graphql/products";
// import { Product } from "../../types";

const ProductDetail = ({
  item: {
    title,
    imageUrl,
    description,
    price,
  }
}: {
  item: PRODUCT
}) => (
  <div className="product-detail">
    <p className="product-detail__title">{title}</p>
    <img className="product-detail__image" src={imageUrl} alt=""/>
    <p className="product-detail__description">{description}</p>
    <span className="product-detail__price" >${price}</span>
  </div>
)

export default ProductDetail