import "./ProductCard.css";

const ProductCard = ({ title, image, price, rating, count }) => (
  <div className="product-card" onClick={() => alert("Out of Stock")}>
    <div className="product-image">
      <img src={image} alt="" />
    </div>
    <div className="product-info">
      <h4> {title} </h4> <h5> ${price} </h5>{" "}
      <h6>
        ✰{rating} Sold:{count}
      </h6>
    </div>
  </div>
);

export default ProductCard;
