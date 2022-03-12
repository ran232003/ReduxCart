import { useDispatch, useSelector } from 'react-redux';
import { cartActions } from '../../store/CartSlice';
import classes from './CartItem.module.css';

const CartItem = (props) => {
  const { title, quantity, total, price } = props.item;
  const dispatch = useDispatch();
  const cart = useSelector((state)=>{
    return state.cart;
  })

  const handleAdd = (event)=>{
    const obj = {title:title, price:price};
    dispatch(cartActions.addItems(obj))
    addToCart();
  }
  const addToCart = async()=>{
    const response = await fetch("http://localhost:5000/cart/addItem2",{
      method:"POST",
      headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({cart,title,price})
    })
  }
  const removeItem = async()=>{
    const response = await fetch("http://localhost:5000/cart/removeItem2",{
      method:"POST",
      headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({cart,title,price})
    })
  }
  const handleRemove = (event)=>{
    const obj = {title:title, price:price};
    dispatch(cartActions.removeItem(obj));
    removeItem();
  }
  console.log("cart",cart)
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
