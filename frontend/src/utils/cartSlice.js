import {createSlice} from "@reduxjs/toolkit";


const cartSlice=createSlice({
    name:"cart",
    initialState:{
        items:[],
    },
    reducers:{
          addItem:(state,action)=>{
             state.items.push(action.payload);
          },

          removeItem:(state,action)=>{
             
               console.log(action.payload)
                // const arrayafterremoval=state.items.filter((item)=>{
                //   return item.card.info.id != action.payload;
                // });
                // state.items[arrayafterremoval];
           },

          clearCart:(state)=>{
            state.items=[];
          }
    }
})

export const {addItem,removeItem,clearCart}= cartSlice.actions;
export default cartSlice.reducer;
