import React, {useState}from "react";
import "./Style.css"
import { useNavigate } from "react-router-dom";


function Orderform(){
  const[order,setOrder]=useState({name:"",phone:"",adrs:"",point:"",method:""})
  const[errors,setErrors]=useState([]);
  // const[succes,setSuccess]=useState(false);
  const[table,setTable]=useState([])
  const nav=useNavigate();



   function handlechange(e){
        const {name,value} = e.target;
        setOrder(prev => ({...prev,[name]:value}));
        setErrors(prev =>({...prev,[name]:""}));
    }
    function handlesubmit(e){
        e.preventDefault();

        const err = {};
        if(!order.name.trim())      err.name  =  "name is required";
        if(!order.phone.length==10)  err.phone = "enter a valid phone number";
        if(!order.adrs.trim())   err.adrs = "Adress is required";
        if(order.method==="")    err.method="Please select a payment method"
      
        if(Object.keys(err).length>0){
            setErrors(err);
            return;
        }

        setTable([...table,order]);
        // setSuccess(true);
        alert("Order placed successfully✅✨")
        setOrder({name:"",phone:"",adrs:"",point:"",method:""});

        setTimeout(()=>{
            nav('/display')
        },1200);

      }
      console.log(order);
    return(<>
    <div className="orderpage">
        <h2 style={{
            textAlign:"center"
        }}> Fill Your Order Form</h2>
        <p >Your beauty products are just one step away!</p>
        <form className="ordform" onSubmit={handlesubmit}>
            <div className="field">
              
             {errors.name && <p className="errors">{errors.name}</p>}

              <label>Full Name</label>
              <input type="text" name="name" placeholder="Enter Your Name" value={order.name} onChange={handlechange}/>

            </div>
            <div className="field">
              <label>Phone </label>   
              {errors.phone && <p className="errors">{errors.phone}</p>}

              <input type="text" name="phone" placeholder="Enter Your Number" value={order.phone} onChange={handlechange}/>

            </div>
            <div className="field">
               {errors.adrs && <p className="errors">{errors.adrs}</p>}
              <label>Address</label>
             <textarea placeholder="Address" name="adrs" value={order.adrs} onChange={handlechange}></textarea>

            </div>
            <div className="field">
              <label>Nearest point</label>
              <p style={{marginTop:"10px" ,left:"125px"}}>(optional)</p>
              <input type="text" name="point" placeholder="Ex: Near mc Mall" value={order.point} onChange={handlechange}/>
            </div>
            <div className="fieldrd">
              <label>Payment method</label>
              <div className="radio">
                {errors.method && <p className="errors">{errors.method}</p>}

                <label>Cash on Delivery</label>

              <input type="radio" name="method" value="cod" checked={order.method==="cod"} onChange={handlechange}/>
              <label>Upi</label>
             <input type="radio" name="method" value="upi" checked={order.method==="upi"} onChange={handlechange}/>
             </div>
            </div>
            <button type="submit" className="buttonord">Order</button> 

        </form>
    </div>
    </>)
}
export default Orderform;