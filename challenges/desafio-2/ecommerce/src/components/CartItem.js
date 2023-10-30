import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { IoMdClose, IoMdRemove, IoMdAdd } from 'react-icons/io';
import { CartContext } from '../context/CartContext';


const CartItem = ({ item }) => {
  const { removeFromCart, increaseAmount, decreaseAmount } = useContext(CartContext);

  const { id, title, image, price, amount } = item;

  return (
    <div className='flex gap-x-4 py-2 lg:px-6 border-b border-gray-200 w-full font-light text-gray'>
      <div className='w-full min-h-[150px] flex items-center gap-x-4'>
        <Link to={`/product/${id}`}>
          <img className='max-w-[80px]' src={image} alt='' />
        </Link>

        <div className='w-full flex flex-col'>
          <div className='flex justify-between mb-2'>
            <div className='text-sm font-medium uppercase max-w-[240px] text-primary hover:underline'>
              {title}
            </div>
            <div onClick={() => removeFromCart(id)} className='text-x1 cursor-pointer'>
              <IoMdClose className='text-gray-500 hover:text-red-500 transition' />
            </div>
          </div>
          <div className='flex gap-x-2 text-sm items-center'>
            <div className='text-x1 cursor-pointer'>
              <div className='flex max-w-[100px] items-center'>
                <div onClick={() => decreaseAmount(id)} className='cursor-pointer'>
                  <IoMdRemove />
                </div>
                <div className='text-center' style={{ margin: '0 8px' }}>{amount}</div>
                <div onClick={() => increaseAmount(id)} className='flex-1 h-full flex justify-center items-center cursor-pointer'>
                  <IoMdAdd />
                </div>
              </div>
              <div className='flex-1 flex items-center'>
                <div>R$ {price}</div>
              </div>
              <div className='flex-1 flex justify-end items-center text-primary font-medium'>{`R$ ${parseFloat(price * amount).toFixed(2)}`}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
