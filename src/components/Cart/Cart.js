import { useSelector } from 'react-redux';
import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';

const Cart = (props) => {
  const cart = useSelector((state)=>{
    return state.cart;
  })
  console.log(cart);
if(cart.visible){
  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {
          cart.items.map((item)=>{
            return(
              <CartItem
              item = {item}
              />
            )
          })
        }
       
      </ul>
    </Card>
  );
      }
      else{
        return(
          <div></div>
        )
      }
};

export default Cart;
