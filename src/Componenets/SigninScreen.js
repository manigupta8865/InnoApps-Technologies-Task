import React, { useState, useEffect } from 'react'
import {Link} from 'react-router-dom'
function SigninScreen(props)
{
    
     const submitData=(e)=>{
          e.preventDefault()
          alert("ggggggggggggg")
    }
    
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    return(

        <div className="form">
            <form onSubmit={submitData}>
                
                <ul className="form-list-container">
            
                    <li><h2>Sign-In</h2></li>
                    <li>
                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email"name="email" onChange={(e)=>setEmail(e.target.value)} ></input>
                    </li>

                    <li>
                        <label htmlFor="password">Password:</label>
                        <input type="password" id="password" name="password"onChange={(e)=>setPassword(e.target.value)} ></input>
                    </li>

                    <li>
                        <button className="button primary">SignIn</button>
                    </li>

                    <li>
                        don not have an account- <Link to="/register"className="button primary">Register</Link>
                    </li>
    

                              
                </ul>
            </form>
            
        </div>
    )
}
export default SigninScreen