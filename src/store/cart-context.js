import React from 'react';
import CartContext from './cart-context';

const CartContext = React.createContext({
  items: [],
  totalAmount: 0,
  addItem: item => {},
  removeItem: id => {},
});

export default CartContext;
