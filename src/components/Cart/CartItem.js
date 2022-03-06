import { useDispatch } from 'react-redux';
import { cartActions } from '../../store/CartSlice';
import classes from './CartItem.module.css';

const CartItem = (props) => {
  const { title, quantity, total, price } = props.item;
  const dispatch = useDispatch();


  const handleAdd = (event)=>{
    const obj = {title:title, price:price};
    dispatch(cartActions.addItems(obj))

  }
  const handleRemove = (event)=>{
    const obj = {title:title, price:price};
    dispatch(cartActions.removeItem(obj));
    
  }
  if(total != 0){
  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${total.toFixed(2)}{' '}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={handleRemove}>-</button>
          <button onClick={handleAdd}>+</button>
        </div>
      </div>
    </li>
  );
}
else{
  return <div></div>;
}
};

export default CartItem;
