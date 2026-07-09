import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Homepage from './Components/Homepage'
import Register from './Components/Register'
import Login from './Components/Login'
import { myContext } from './Components/Context/Context'
import {products} from './Components/Productlist'
import Productdisplay from './Components/Productdisplay'
import Cart from './Components/Cart'
import Wishlist from './Components/Wishlist'
import Category from './Components/Category'
import Orderform from './Components/Orederform'

function App() {
  const [count, setCount] = useState(0)
  const[product,setProduct]=useState(products);
  const[cart,setCart]=useState([]);
  const[like,setLike]=useState([]);
  const[buy,setBuy]=useState([]);

  return (
    <>
     {/* <BrowserRouter> */}
     <myContext.Provider value={{product,setProduct,cart,setCart,like,setLike,buy,setBuy}}>
     <Routes>
      <Route path='/' element={<Homepage/>}></Route>
      <Route path='reg' element={<Register/>}></Route>
      <Route path='log' element={<Login/>}></Route>
      <Route path='display' element={<Productdisplay/>}></Route>
      <Route path='cart' element={<Cart/>}></Route>
       <Route path='like' element={<Wishlist/>}></Route>
       <Route path='/display/:cat' element={<Category/>}></Route>
        <Route path='order' element={<Orderform/>}></Route>



        </Routes>
        </myContext.Provider>
        {/* </BrowserRouter> */}
    </>
  )
}

export default App
