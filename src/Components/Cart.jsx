
import React,{useState,useContext} from "react";
import { myContext } from "./Context/Context";
import './Style.css'
import { FaInstagram,FaFacebook,FaTwitter,FaWhatsapp } from "react-icons/fa";
import { Link,useNavigate } from "react-router-dom";



function Cart(){
    const{cart,setCart,buy,setBuy}=useContext(myContext)

    const handleremove = (index)=>{
        const newcart=[...cart]
        newcart.splice(index,1);
        setCart(newcart);
    }
     const handlebuy=(pdt)=>{
        if(buy.includes(pdt)){
            setBuy(buy.filter(pro)!==pdt)
        }
        else{
            setBuy([...buy,pdt])
        }
    }

    return(
        <>
           <header className="prdhead">
                        {/* <div className="logo"> */}
                <h2 style={{fontSize:"35px"}}><span style={{color:"#ac664c", fontSize:"40px"}}>Cosmo</span>Glow</h2>
                {/* </div> */}
                       
                            <nav className="navbarpr">  
                            
                            <Link to="/display"className="prdlink"  style={{marginRight:"30px"}}><b>Home</b></Link>
                           
                        </nav>
                    </header>
       <div>
        <h1>Products</h1>
       
        <div className="containerpr">
              
            {cart.map((item,index)=>(
            <div className="prd"  key={item.id}>
                <div>
                <img src={item.image}></img>
                </div>
                <ul>
               <li> <h3>{item.productname}</h3></li>
                <li><h4>{item.price}</h4></li>
                </ul>
                 <div className="btnn">
                <button className="btn2" onClick={()=>handleremove(index)}>Remove</button>
                <button className="btn1"  onClick={()=>handlebuy(item)}>{buy.includes(item) ? "order placed" :"buy"}</button>
                 </div>
                
            </div>
           
      ))}
</div>
</div>
 <section className="footer">
                     <div style={{marginLeft:"20px"}}>
                     <h2 style={{fontSize:"35px"}}><span style={{color:"#ac664c", fontSize:"40px"}}>Cosmo</span>Glow</h2>
                     <i><p>Enhancin your natural beauty<br /> 
                         with premium skincare,makeup and beauty <br />
                         essentials.shop with confidence and glow every day.</p>
                     </i>
                     </div>
                     <div>
                         <h3>Quik Links</h3>
                         <ul>
                             <li><a href="#">Home</a></li>
                             <li><a href="#">Products</a></li>
                             <li><a href="#">categories</a></li>
                             <li><a href="#">About Us</a></li>
                             <li><a href="#">Contact Us</a></li>
                         </ul>
                     </div>
                     <div>
                         <h3>Contact</h3>
                         <p>📍Kerala,India</p>
                         <p>📞+919876543210</p>
                         <p>📧cosmo@gmail.com</p>
                     </div>
                     <div>
                         <h1>Follow Us</h1>
                         <ul className="icon">
                             <li style={{color:"#d72e4d"}}><FaInstagram/></li>
                             <li style={{color:"#125ec3"}}><FaFacebook/></li>
                             <li style={{color:"blue"}}><FaTwitter/></li>
                             <li style={{color:"green"}}><FaWhatsapp/></li>
                         </ul>
                     </div>
                 </section>
                 </>
    )
}
export default Cart