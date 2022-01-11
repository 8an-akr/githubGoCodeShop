import ProductCard from "../ProductCard/ProductCard";
import "./Products.css";

const Products = ({ itemArrByCat }) => (
  <section className="products">
    {itemArrByCat.map((item) => (
      <ProductCard
        key={item.id}
        title={item.title}
        image={item.image}
        price={item.price}
        description={item.description}
        category={item.category}
        rating={item.rating.rate}
        count={item.rating.count}
      />
    ))}
  </section>
);

export default Products;
