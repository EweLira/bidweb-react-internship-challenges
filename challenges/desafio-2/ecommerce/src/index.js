import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import ProductProvider from './context/ProductContext';
import SidebarProvider from './context/SidebarContext';
import CartContext from './context/CartContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <SidebarProvider>
    <CartContext>
      <ProductProvider>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </ProductProvider>
    </CartContext>
  </SidebarProvider>
);

//