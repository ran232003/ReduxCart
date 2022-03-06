import CartItem from '../Cart/CartItem';
import ProductItem from './ProductItem';
import classes from './Products.module.css';

const Products = (props) => {
  const items = [{title:"Ball",price:10,des:"Amazing Ball"}]
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
      {items.map((item)=>{
          return(
            <ProductItem
            title={item.title}
            price={item.price}
            description={item.des}
          />
        )
        })}
        <ProductItem
          title='Test'
          price={6}
          description='This is a first product - amazing!'
        />
      </ul>
    </section>
  );
};

export default Products;
