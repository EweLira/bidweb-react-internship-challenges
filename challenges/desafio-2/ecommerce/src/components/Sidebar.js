import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { IoMdArrowForward } from 'react-icons/io';
import { FiTrash2 } from 'react-icons/fi';
import CartItem from '../components/CartItem';
import { SidebarContext } from '../context/SidebarContext';
import { CartContext } from '../context/CartContext';

const Sidebar = () => {
  const { isOpen, handleClose } = useContext(SidebarContext);
  const { cart, clearCart } = useContext(CartContext);

  // Calculate the total price
  const totalPrice = cart.reduce((total, item) => total + item.price, 0);

  return (
    <div
      className={`${
        isOpen ? 'right-0' : '-right-full'
      } w-full bg-white fixed top-0 h-full shadow-2x1 md:w-[35vw] x1:max-w-[30vw] transition-all duration-300 z-20 px-4 lg:px-[35px]`}
    >
      <div className='flex items-center justify-between py-6 border-b'>
        <div className='uppercase text-sm font-semibold'>Carrinho ({cart.length})</div>
        <div onClick={handleClose} className='cursor-pointer w-8 h-8 flex justify-center items-center'>
          <IoMdArrowForward className='text-2x1' />
        </div>
      </div>

      <div>
        {cart.map((item) => {
          return <CartItem item={item} key={item.id} />;
        })}
      </div>
      <div className=' uppercase font-semibold'>
        
      <div className='flex w-full justify-between items-center'>
        <div>
          <span>Total:</span> R$ 
        </div>
        </div>
        <div
          onClick={clearCart}
          className='cursor-pointer w-12 h-12 justify-center flex py-4 text-white bg-red-500 items-center text-x1'
        >
          <FiTrash2 />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
