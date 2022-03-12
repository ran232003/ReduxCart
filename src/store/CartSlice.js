import { createSlice } from "@reduxjs/toolkit"

const cartSlice = createSlice({
    name:"cart",
    initialState:{visible:true,items:[],totalPrice:0,totalItems:0},
    reducers:{
        visible(state){
            state.visible = !state.visible
        },
        updateCart(state,action){
            state.items = action.payload.items;
            state.totalItems = action.payload.totalItems;
            state.totalPrice = action.payload.totalPrice;
            state.visible = action.payload.visible;
        },
        addItems(state,action){
            
            const itemToAdd = action.payload;
            let flag = false;
            
            for(var i = 0; i < state.items.length; i++){
                if(state.items[i].title == itemToAdd.title){
                    flag = true;
                  
                   state.items[i].total = state.items[i].total + state.items[i].price;
                   state.items[i].quantity++;
                   state.totalPrice = state.totalPrice + itemToAdd.price;
                   state.totalItems++;
                   console.log(state)
                    break;
                }
            }
            if(flag == false){
                state.items.push({total:itemToAdd.price,quantity:1,title:itemToAdd.title,price:itemToAdd.price});
                state.totalPrice = state.totalPrice + itemToAdd.price;
                state.totalItems++;
               
            }
            
        },
        removeItem(state,action){
            const itemToRemove = action.payload;
            for(var i = 0; i < state.items.length; i++){
                if(state.items[i].price == itemToRemove.price && state.items[i].title == itemToRemove.title){
                    
                    state.totalPrice = state.totalPrice -  itemToRemove.price;
                    state.items[i].quantity--;
                    state.items[i].total = state.items[i].total - state.items[i].price;
                    state.totalItems--;
                    if(state.totalPrice == 0){
                        state.items.splice(i,1);
                    }
                    break;
                }
            }
            
        }

    }

})
export default cartSlice;
export const cartActions = cartSlice.actions;