import { useState } from "react";
import { getUsers,saveUsers } from "../Authstorage";
import "./Style.css"
import { useNavigate } from "react-router-dom";

//register component

export default function Register(){
    const[form,setForm]= useState({name:"",email:"",password:""})
    const [errors,setErrors]=useState({})
    const[success,setSuccess]=useState(false);

    const nav=useNavigate()

    function handleChange(e){
        const {name,value} = e.target;
        setForm(prev => ({...prev,[name]:value}));
        setErrors(prev =>({...prev,[name]:""}));
    }

    function handleSubmit(e){
        e.preventDefault();

        const err = {};
        if(!form.name.trim())      err.name  =  "name is required";
        if(!form.email.includes('@'))  err.email = "enter a valid email";
        if(form.password.length<6)   err.password = "min 6 characters";

        const users = getUsers();
        const emailexists = users.some(u => u.email ===form.email);
        if (emailexists)err.email="Email already registered";

        if(Object.keys(err).length>0){
            setErrors(err);
            return;
        }

        // save new user to localStorage 

        const newUsers = {name:form.name,email:form.email,password:form.password};
        saveUsers([...users,newUsers]);

        setSuccess(true);
        setForm({name:"",email:"",password:""});

        setTimeout(()=>{
            nav('/log')
        },1200);
    }
    return(
        <div>
            <div className="page">
                <h1  style={{color:"white" }}>Create Account</h1>
                <h4 style={{color:"white"}} >Register to get Started</h4>
                { success && (
                    <div>Registered Successfully! Redirecting to login....</div>
                )}
                <form onSubmit={handleSubmit} >
                    <div className="field">
                        <label>Full Name</label>
                        <input type="text" name="name" value={form.name} placeholder="eg.Arun" onChange={handleChange}/>
                        {errors.name && <p style={{color:"red"}}>{errors.name}</p>}
                    </div>
                    <div className="field">
                        <label>Email</label>
                        <input type="email" name="email" value={form.email} placeholder="arun@example.com" onChange={handleChange}/>
                        {errors.email && <p style={{color:"red"}}>{errors.email}</p>}
                    </div>
                      <div className="field">
                        <label>Password</label>
                        <input type="password" name="password" value={form.password} placeholder="at least 6 characters" onChange={handleChange}/>
                        {errors.password && <p style={{color:"red"}}>{errors.password}</p>}
                    </div>
                    <button type="submit" className="button">Register</button>
                </form>
                {/* <p style={{marginTop:"30px"}}>Already have an Account{" "}
                    <button type="button" onClick={()=>nav('/login')} >Login here</button>
                </p> */}

            </div>
        </div>
    );
}