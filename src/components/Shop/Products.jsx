import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const products = [
  {
    id: "1",
    title: "Product 1",
    price: 12,
    description: "This is an amazing product!",
  },
  {
    id: "2",
    title: "Product 2",
    price: 8.99,
    description: "This is an amazing product!",
  },
];

const loadedContent = products.map((product) => (
  <ProductItem
    key={product.id}
    id={product.id}
    title={product.title}
    price={product.price}
    description={product.description}
  />
));

const Products = () => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>{loadedContent}</ul>
    </section>
  );
};

export default Products;
