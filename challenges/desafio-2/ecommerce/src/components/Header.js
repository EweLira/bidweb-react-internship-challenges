import React,{useContext} from "react";

import { SidebarContext } from "../context/SidebarContext";
import {BsBag} from 'react-icons/bs'


const Header = () => {
  const {isOpen, setIsOpen} = useContext(SidebarContext);
  return (
  <header className="bg-pink-200">
    <div>Header</div>
    <div onClick={()=> setIsOpen(!isOpen)}
    className='cursor-pointer flex relative'>
      <BsBag className="text-2x1"/></div>

    </header>
  );
}

export default Header;