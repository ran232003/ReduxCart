import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { cartActions } from '../../store/CartSlice';
import classes from './CartButton.module.css';

const CartButton = (props) => {
  const dispatch = useDispatch();
  const cart = useSelector((state)=>{
    return state.cart;
  })


  const handleToggle = (event)=>{
    dispatch(cartActions.visible(cart.visible))
  }

  return (
    <button className={classes.button} onClick={handleToggle}>
      <span>My Cart</span>
      <span className={classes.badge}>{cart.totalItems}</span>
    </button>
  );
};

export default CartButton;
