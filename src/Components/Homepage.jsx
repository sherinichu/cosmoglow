import React from "react";
import "./Style.css";
import { Link } from "react-router-dom";
import { FaInstagram,FaFacebook,FaTwitter,FaWhatsapp } from "react-icons/fa";

function Homepage(){
    return(
    <>
        <div className ="container">
            <header>
                <div className="logo">
        <h2 style={{fontSize:"35px"}}><span style={{color:"#ac664c", fontSize:"40px"}}>Cosmo</span>Glow</h2>
        </div>
        <nav className="navbar">
          
                <Link to="/reg" className="nav-link">Sign Up</Link> 
                <Link to="/log" className="nav-link">Login</Link> 
            
    </nav>
            </header>

        </div>
        <section className="categorys">
            <h1> CATEGORIES</h1>
        <div className="category">
            <div className="cards">

                <div className="card"> <img src="/images/sub1.png"/><p>Skincare</p></div>             
                <div className="card"> <img src="/images/sub2.png"/><p>Body&Hair</p></div>
                <div className="card"> <img src="/images/sub3.png"/><p>Fragrance</p></div>
                <div className="card"> <img src="/images/sub4.jpg"/><p>Makeup</p></div>
            </div>
            <div className="cards2">
               <h2 style={{fontSize:"50px"}}>Discover Beauty Essentials</h2>
               <p style={{fontStyle:"italic",fontSize:"30px"}}>Explore our premium collection  of 
                Cosmetics designed to enhance your natural beauty.
                   From every day makeup to skincare must-haves,
                   find products that suit every skin tone and
                   style.Shop high-quality,trendy,and affordable
                    beauty Essentials all in one place </p>
            </div>
            </div>
        </section>
        <section className="brands">
            <h1>Our Top Brands</h1>
            <div className="brand">
              <div className="br"> <img src="/images/br1.png"></img></div> 
                  <div className="br"><img src="/images/br2.png"></img></div>
                  <div className="br"><img src="/images/br3.png"></img></div>
                  <div className="br"><img src="/images/br4.jpg"></img></div>
                  <div className="br"><img src="/images/br5.png"></img></div>
                  <div className="br"><img src="/images/br6.png"></img></div>
                  <div className="br"><img src="/images/br7.jpg"></img></div>
                  <div className="br"><img src="/images/br8.png"></img></div>
                  <div className="br"><img src="/images/br9.jpg"></img></div>
                  <div className="br"><img src="/images/br10.jpg"></img></div>

            </div>
        </section>
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
export default Homepage