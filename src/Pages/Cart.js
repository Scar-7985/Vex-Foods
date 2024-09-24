import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ShopContext } from '../Context/ShopContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faPlus, faMinus, faTrash } from '@fortawesome/free-solid-svg-icons';

const Cart = () => {
  const { cartData, setCartData } = useContext(ShopContext);
  const [itemCounts, setItemCounts] = useState({}); // To hold count for each item
  const [totalPrice, setTotalPrice] = useState(0);

  // Initializing itemCounts based on cartData
  useEffect(() => {
    const initialCounts = {};
    cartData.forEach(item => {
      initialCounts[item.id] = 1; // Default count to 1 for each item
    });
    setItemCounts(initialCounts);
  }, [cartData]);

  const handlePrice = () => {
    let ans = 0;
    cartData.forEach(item => {
      const count = itemCounts[item.id] || 0; // Use 0 if the item is not found in itemCounts
      ans += item.newPrice * count; // Accumulate the total price
    });
    setTotalPrice(ans);
  };

  useEffect(() => {
    handlePrice();
  }, [cartData, itemCounts]); // Recalculate total price when cartData or itemCounts change

  // Remove All
  const handleRemove = (id) => {
    const arr = cartData.filter(item => item.id !== id);
    setCartData(arr);
    setItemCounts(prevCounts => {
      const { [id]: _, ...rest } = prevCounts; // Remove count for the removed item
      return rest;
    });
  };

  // Increment & Decrement Item
  const handleChange = (id, type) => {
    setItemCounts(prevCounts => {
      const currentCount = prevCounts[id] || 1;
      return {
        ...prevCounts,
        [id]: type === 'increment' ? currentCount + 1 : Math.max(currentCount - 1, 1) // Prevent going below 0
      };
    });
  };

  return (
    <div className='border-2 mt-6 md:p-6' style={{ height: 'calc(100vh - 130px)' }}>
      <Link to='/shop' className='md:w-48 bg-red-400 hover:bg-red-500 transition-all duration-300 p-2 text-white flex items-center'>
        <FontAwesomeIcon className='mr-3' icon={faArrowLeft} />Go to Shopping
      </Link>
      <h1 className='text-2xl text-center font-medium mt-2'>--- All Cart ---</h1>

      {cartData.length === 0 ? (
        <div className="text-center p-4">
          <p className="text-lg font-medium">Your cart is empty!</p>
          <p>Add some items to your cart to see them here.</p>
          <Link to='/shop' className='mt-4 inline-block bg-blue-500 hover:bg-blue-600 text-white p-2 rounded'>
            Go to Shop
          </Link>
        </div>
      ) : (
        <div className="flex flex-col gap-4 py-4 md:p-4 my-6 border border-gray-400 overflow-y-auto" style={{ maxHeight: 'calc(100vh - 384px)' }}>

          {cartData.map((item) => (
            <div className='border-2 w-full flex justify-between items-center' key={item.id}>
              <div className='flex items-center gap-4'>
                <img className='h-28' src={item.image} alt={item.name} />
                <p className='text-md font-medium w-32 text-wrap tracking-wide'>{item.name}</p>
              </div>

              <div className='w-10 md:w-32 flex flex-col md:flex-row item-center gap-2'>
                <button className='w-8 h-8 bg-green-400 hover:bg-green-500 transition-all duration-300 text-white' onClick={() => handleChange(item.id, 'increment')}><FontAwesomeIcon icon={faPlus} /></button>
                <p className='w-8 h-8 border-2 border-gray-300 grid place-items-center'>{itemCounts[item.id]}</p>
                <button className='w-8 h-8 bg-red-400 hover:bg-red-500 transition-all duration-300 text-white' onClick={() => handleChange(item.id, 'decrement')}><FontAwesomeIcon icon={faMinus} /></button>
              </div>


              <div className='flex items-center gap-2'>
                <p className='text-lg font-medium w-20 text-right'>$ {item.newPrice * (itemCounts[item.id] || 0)}</p>
                <button className='w-20 h-28 bg-red-400 hover:bg-red-500 transition-all duration-300 text-white' onClick={() => handleRemove(item.id)}><FontAwesomeIcon className='text-2xl' icon={faTrash} /></button>
              </div>
            </div>
          ))}
        </div>
      )}

      {cartData.length > 0 &&
        <div className='flex flex-col text-right'>
          <p className='text-xl font-bold'>Total Price: $ {totalPrice}</p>
          <Link className='mt-2 '>
            <button className='bg-green-500 hover:bg-green-600 transition-all duration-300 text-white px-6 py-2' >Pay Now</button>
          </Link>
        </div>}
    </div>
  );
};

export default Cart;
