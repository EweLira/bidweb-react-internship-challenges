import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { IoMdClose, IoMdRemove, IoMdAdd } from 'react-icons/io';
import { CartContext } from '../context/CartContext';

const CartItem = ({ item }) => {
  const { removeFromCart } = useContext(CartContext);

  const { id, title, image, price, amount } = item;

  return (
    <div className='flex gap-x-4 py-2 lg:px-6 border-b'>
      <div className='w-full min-h-[150px] flex items-center gap-x-4'>
        <Link to={`/product/${id}`}>
          <img className='max-w-[80px]' src={image} alt='' />
        </Link>
        <div className='w-full flex flex-col'>
          <div className='flex justify-between mb-2'>
            <Link
              to={`/product/${id}`}
              className='text-sm uppercase max-w-[240px] text-primary hover:underline'
            >
              {title}
            </Link>
          </div>
          <div onClick={() => removeFromCart(id)} className='text-x1 cursor-pointer'>
            <IoMdClose className='text-gra-500 hover:text-red-500 transition' />
            <div className='flex flex-1 max-w-[100px] items-center'>
              <div className='flex-1 '>
                <IoMdRemove />
              </div>
              <div>{amount}</div>
              <div className='flex-1 h-full flex justify-center items-center cursor-pointer'>
                <IoMdAdd />
              </div>
            </div>
            <div className='flex-1 flex justify-end items-center font-medium'>{price}</div>
            <div>{`$ ${parseFloat(price * amount).toFixed(2)}`}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
