import { createSlice } from '@reduxjs/toolkit'
export const Cartslice = createSlice({
  name: 'cart',
  initialState:{
    cart:[],
  },
  reducers: {
    addtoCart : (state,action) =>{
      state.cart.push(action.payload)
    }
  },
})

// Action creators are generated for each case reducer function
export const {addtoCart  } = Cartslice.actions

export default Cartslice.reducer