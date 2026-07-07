import "./Style.css"
import { useState } from "react";
import { getUsers ,setLoggedInUsers} from "../Authstorage";
import { useNavigate } from "react-router-dom";
export default function Login(){

    const [form,setForm]=useState({email:"",password:""})
    const [error,setError]=useState("");

    const nav = useNavigate();

    function handleChange(e){
        const {name,value} = e.target;
        setForm(prev => ({...prev,[name]:value}));
        setError("");
    }
    function handleSubmit(e){
        e.preventDefault();

        if(!form.email ||!form.password){
            setError("please fill in both fields");
            return;
        }

        const users =getUsers();
        const matchedUser = users.find(
            u => u.email=== form.email && u.password === form.password
        );
        if(!matchedUser){
            setError("Invalid email or password");
            return;
        }

        setTimeout(()=>{
            setLoggedInUsers(matchedUser);
            alert("Login success")
            nav('/display')
        },1000)
    }
      return(
        <div>
            <div className="page">
                <h1 style={{color:"white"}}>Welcome back</h1>
             {error && (
                <div >{error}</div>
             )}
                <form className="login" onSubmit={handleSubmit} >
                                    <h2 >Login to your Account</h2>

                    <div className="field" >
                        <label>Email</label>
                        <input type="email" name="email" placeholder="arun@example.com"  value={form.email} onChange={handleChange}/>
                        {/* {errors.email && <p style={{color:"red"}}></p>} */}
                    </div>
                      <div className="field">
                        <label>Password</label>
                        <input type="password" name="password"  placeholder="at least 6 characters" value={form.password} onChange={handleChange} />
                        {/* {errors.password && <p style={{color:"red"}}></p>} */}
                    </div>
                    <button className="button" type="submit">Login</button>
                </form>
              {/* <p>Don't have an Account?{""}
                <button type="button" onClick={()=>nav('/reg')}>Register</button>
              </p> */}

            </div>
        </div>
    );
}
