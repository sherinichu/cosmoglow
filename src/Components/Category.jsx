import React, { useContext } from "react";
import { myContext } from "./Context/Context";
import { useParams } from "react-router-dom";
import "./Style.css"


function Category(){
    const{product}=useContext(myContext)

    const{cat}=useParams()  //extract url parameters from the route.from prdt/:cat

    const products=product.filter(pr=>pr.category===cat)
    console.log("products",product,cat);
    return(
        <div>
        <h1>Products</h1>
       
        <div className="containerpr">
              
            {products.map((item)=>(
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
export default Category