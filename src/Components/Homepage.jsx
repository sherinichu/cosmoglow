import React from "react";
import "./Style.css";
import { Link } from "react-router-dom";
import { FaInstagram,FaFacebook,FaTwitter,FaWhatsapp } from "react-icons/fa";

function Homepage(){
    return(
    <>
        {/* <div className ="container"> */}
            <header>
              
        <nav className="navbar">
            <div className="logo">
        <h2 style={{fontSize:"35px"}}><span style={{color:"#ac664c", fontSize:"40px"}}>Cosmo</span>Glow</h2>
        </div>
        {/* <div> */}
             <span className="deliver"> <span className="truck">🚛</span> Free Delivery on Your First order..Order Now✨</span>
             {/* </div> */}
              <div className="lk">
              <div className="nav-link"> <Link to="/reg" >Sign Up </Link> </div>
                <div className="nav-link"><Link to="/log" >Login</Link> </div>
            </div>
    </nav>
            </header>
        {/* </div> */}
           <div className="container-fluid">
        <div id="mycarousel" className="carousel slide" data-bs-ride="mycarousel" data-bs-interval="3000">
            <div className="carousel-indicators">
                <button type="button " data-bs-target="#mycarousel" data-bs-slide-to="0" className="active"></button>
                <button type="button " data-bs-target="#mycarousel" data-bs-slide-to="1" ></button>
                <button type="button " data-bs-target="#mycarousel" data-bs-slide-to="2" ></button>
            </div>

            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img className="d-block w-100" src="/images/wal.png"/>
                    <h2 className="glow-title"> Glow Beyond</h2>
                    <h2 className="beauty-title">Beauty</h2>
                    <p className="hero-text">Discover premium skincare beauty products 
                     that <br /> bring out your natural radience</p>
                     <button className="carbtn" onClick={'/reg'}>Shop Now</button>
                </div>
                 <div className="carousel-item ">
                    <img className="d-block w-100" src="/images/wal2.jpg" />
                </div>
                 <div className="carousel-item ">
                    <img className="  d-block w-100" src="/images/wal3.jpg"/>
                </div>
            </div>
            <button className="carousel-control-next" data-bs-target="#mycarousel" data-bs-slide="next">
                <span className="carousel-control-next-icon"></span>
            </button>
            <button className="carousel-control-prev" data-bs-target="#mycarousel" data-bs-slide="prev">
                <span className="carousel-control-prev-icon"></span>
            </button>
        </div>
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
      <section className="offers">
        <h1 style={{fontStyle:"oblique", color:"#a63e36",fontWeight:'bold'}}> what we Offer</h1>
        <div className="off1">
            <h1 className="off-title">Winter sale</h1>
            <h2 className="off-sub">Up to 50% offers</h2>
            <h3 className="off-min">on selected Brands </h3><h5 className="off-min1">Limited Time offer</h5>
            <div className="off2">
                <h2>Glow More, Spend Less<br/>Enjoy Big savings</h2>
                </div>
                <div className="off3">
                <h2>Limited Time Offer-Shop before its gone</h2>
            </div>

             <div className="off4">
               {/* <div className="cards"> */}

                <div className="cardof"> <img src="/images/off1.jpg"/><p>Buy combo pack<br/>get 50% offer</p></div>             
                <div className="cardof"> <img src="/images/offf2.jpg"/><p>up to<br/> 70% offer</p></div>
                <div className="cardof"> <img src="/images/off3.jpg"/><p>Buy 2<br/> Get 1 Free</p></div>
                <div className="cardof"> <img src="/images/off4.jpg"/><p>30% Offer<br/> Grab Now</p></div>
            {/* </div> */}
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
                    <li><a href="#" style={{color:'white'}}>Home</a></li>
                    <li><a href="#" style={{color:'white'}}>Products</a></li>
                    <li><a href="#" style={{color:'white'}}>categories</a></li>
                    <li><a href="#" style={{color:'white'}}>About Us</a></li>
                    <li><a href="#" style={{color:'white'}}>Contact Us</a></li>
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