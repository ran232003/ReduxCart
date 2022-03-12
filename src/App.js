import { useEffect } from 'react';
import { Provider, useDispatch, useSelector } from 'react-redux';
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import store from './store';
import { cartActions } from './store/CartSlice';

function App() {
  let cart = useSelector((state)=>{
    return state.cart
  })
  const dispatch = useDispatch();
  const getCart = async()=>{
    const state = {totalPrice:0,totalItems:0}
    const response = await fetch("http://localhost:5000/cart/create2",{
      method:"POST",
      headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({state})
    })
    const data = await response.json();
 
    let newCart = await data.cart;
    dispatch(cartActions.updateCart(newCart))
    return newCart;
  }

  useEffect(()=>{
   let dbCart =  getCart();
   
   

  },[])
  return (
    
    <Layout>
      <Cart />
      <Products />
    </Layout>
   
  );
}

export default App;
