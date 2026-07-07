
import React,{useState,useContext} from "react";
import { myContext } from "./Context/Context";
import './Style.css'

function Cart(){
    const{cart,setCart}=useContext(myContext)

    return(
       <div>
        <h1>Products</h1>
       
        <div className="containerpr">
              
            {cart.map((item)=>(
            <div className="prd"  key={item.id}>
                <div>
                <img src={item.image}></img>
                </div>
                <ul>
               <li> <h3>{item.productname}</h3></li>
                <li><h4>{item.price}</h4></li>
                </ul>
                
            </div>
           
      ))}
</div>
</div>
    )
}
export default Cart