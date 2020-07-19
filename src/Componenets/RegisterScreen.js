import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import SigninScreen from './SigninScreen'
function RegisterScreen(props)
{
    
    const submitData=(e)=>{
          e.preventDefault()
          alert("dddddd")    }
    const [name,setName]=useState("")
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const [Repassword,setRePassword]=useState("")
    return(

        <div className="form">
            <form onSubmit={submitData}>
                
                <ul className="form-list-container">
                    
                    <li><h2>Register-here</h2></li>

                    <li>
                        <label htmlFor="name">Name:</label>
                        <input type="name" id="name"name="name" onChange={(e)=>setName(e.target.value)} ></input>
                    </li>

                    <li>
                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email"name="email" onChange={(e)=>setEmail(e.target.value)} ></input>
                    </li>

                    <li>
                        <label htmlFor="password">Password:</label>
                        <input type="password" id="password" name="password"onChange={(e)=>setPassword(e.target.value)} ></input>
                    </li>


                    <li>
                        <label htmlFor="RePassword">Re-Password:</label>
                        <input type="RePassword" id="password" name="RePassword"onChange={(e)=>setRePassword(e.target.value)} ></input>
                    </li>

                    <li>
                        <button className="button primary">Register</button>
                    </li>

                    <li>
                    Already have an Account?<Link to="/signin" className="button primary">SignIn</Link>
                    </li>
                

                    
                </ul>
            </form>
            
        </div>
    )
}
export default RegisterScreen