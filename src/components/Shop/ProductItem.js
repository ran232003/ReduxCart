import { useDispatch, useSelector } from 'react-redux';
import { cartActions } from '../../store/CartSlice';
import Card from '../UI/Card';
import classes from './ProductItem.module.css';

const ProductItem = (props) => {
  const { title, price, description } = props;
  const dispatch = useDispatch();
  const cart = useSelector((state)=>{
    return state.cart;
  })
  const handleSubmit = (event)=>{
    const obj = {price:price,title:title}
    dispatch(cartActions.addItems(obj));
  }

  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>${price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className={classes.actions}>
          <button onClick={handleSubmit}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
