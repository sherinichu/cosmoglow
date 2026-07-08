import React,{useState,useContext} from "react";
import { myContext } from "./Context/Context";
import { Link,useNavigate } from "react-router-dom";
import "./Style.css"
import { FaInstagram,FaFacebook,FaTwitter,FaWhatsapp } from "react-icons/fa";



function Productdisplay(){
    const {product,setProduct,cart,setCart,like,setLike}=useContext(myContext)
    const[searchquery,setSearchquery]=useState('')
    const[filterdata,setFilterdata]=useState(product)

    const handlecart=(pdt)=>{
        if(cart.includes(pdt)){
            setCart(cart.filter(pro)!==pdt)
        }
        else{
            setCart([...cart,pdt])
        }
    }

    const handlelike=(pdt)=>{
        if(like.includes(pdt)){
           setLike(like.filter(pro)!==pdt)
        }
        else{
            setLike([...like,pdt])
        }
    }

    function handlesearch(e){
        const query=e.target.value
        setSearchquery(query)
  
    const filtered=product.filter(items=>items.productname.toLowerCase().includes(query.toLowerCase()) 
    || items.category.toLowerCase().includes(query.toLowerCase()) 
    || items.item.toLowerCase().includes(query.toLowerCase()) 
    || items.price.toString().includes(query) )
    setFilterdata(filtered)
   }

    const nav=useNavigate();
    const categories=[...new Set(product.map(product=>product.category))]

    function handleselect(e){
        const query=e.target.value
        nav(`/display/${query}`)
    }

    

    return(
        <>
        <div>
               {/* <div className ="containerpr"> */}
            <header className="prdhead">
                {/* <div className="logo"> */}
        <h2 style={{fontSize:"35px"}}><span style={{color:"#ac664c", fontSize:"40px"}}>Cosmo</span>Glow</h2>
        {/* </div> */}
               
                  <nav className="navbarpr"> 
                      <div className="search">
                    <input  type="search" placeholder="Search here" value={searchquery} onChange={handlesearch}></input>
                    
                </div>  
                    <Link to="/display"className="prdlink" >Home</Link>
                    <Link to="/cart" className="prdlink">Cart</Link>
                    <Link to='/like' className="prdlink">Wishlist</Link>
                    
                   <div>
                    <select className="cate" onChange={handleselect}>
                        <option value="categories">Categories</option>
                        {categories.map((cat)=>
                        <option value={cat} key={cat}>{cat}</option>
                        )}
                    </select> </div>
                    <Link to="/" className="prdlink">Logout</Link>

                </nav>
            </header>
            {/* </div> */}
          
{/*            
            <button className="btn3" ><Link to={'/like'}>Like</Link></button>
            <button className="btn4" ><Link to={'/cart'}>Cart</Link></button> */}
           

        <div className="containerpro">
              <h1>PRODUCTS</h1>
              <div className="containerpr">
            {filterdata.map((item)=>(
            <div className="prd"  key={item.id}>
                <div>
                <img src={item.image}></img>
                </div>
                <ul>
               <li> <h6>{item.productname}</h6></li>
                {/* <li><p>{item.des}</p></li> */}
                <li><h4>{item.price}</h4></li>
                </ul>
                 <div className="btnn">
                <button className="btn2" onClick={()=>handlecart(item)}>{cart.includes(item) ? "Added" :"Add to Cart"}</button>
                <button className="btn1" onClick={()=>handlelike(item)}>{like.includes(item) ? "❤️wishlisted": "🤍Add to wishlist"}</button>
                 </div>
                 </div>
                ))}
            </div>
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
export default Productdisplay