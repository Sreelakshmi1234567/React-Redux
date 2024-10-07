
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addItem, removeItem } from './Cartslice';

const Cart = () => {
  const items = useSelector((state) => state.cart.items);
  const totalPrice = useSelector((state) => state.cart.totalPrice);
  const dispatch = useDispatch();

  const addRandomItem = () => {
    const newItem = {
      id: Math.random().toString(36).substring(7),
      name: 'Item ' + (items.length + 1),
      price: Math.floor(Math.random() * 100) + 1,
    };
    dispatch(addItem(newItem));
  };

  return (
    <div>
      <h2>Shopping Cart</h2>
      <button onClick={addRandomItem}>Add Item</button>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.name} - ${item.price}
            <button onClick={() => dispatch(removeItem(item))}>Remove</button>
          </li>
        ))}
      </ul>
      <h3>Total Price: ${totalPrice}</h3>
    </div>
  );
};

export default Cart;
