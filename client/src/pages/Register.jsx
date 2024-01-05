import { useState } from 'react'
import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

export default function Register() {
    // const navigate=useNavigate()
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    
    const submit=async (e)=>{
        e.preventDefault()
        if(username.length===0 || email.length===0 || password.length===0)
        {
            throw Error("All fields are mandatory")
        }
        else if(username.length<3)
        {
            throw Error("Username must be more than 2 characters")
        }
        else if(password.length<8)
        {
            throw Error("Password must be more than 7 characters")
        }
        else
        {
            const data=await axios.post('http://localhost:5000/register',[username,email,password])
            if(data.status)
            {
                console.log(data)
            }
        }
    }
    
    return (
        <div className="user">
            <form onSubmit={submit}>
                <h1>Chatty</h1>
                <input type='text' placeholder='Username' name='username' onChange={e => setUsername(e.target.value)} />
                <input type="email" placeholder='Email' name='email' onChange={e => setEmail(e.target.value)} />
                <input type="password" placeholder='Password' name='password' onChange={e => setPassword(e.target.value)} />
                <button type='submit'>Register</button>
                <span>Already Registered? <Link to="/login">Login</Link></span>
            </form>

        </div>
    )
}
