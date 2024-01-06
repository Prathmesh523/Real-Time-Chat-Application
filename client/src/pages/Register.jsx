import { useState } from 'react'
import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import '../styles/Register.css'

export default function Register() {
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const submit = async (e) => {
        e.preventDefault()
        if (username.length === 0 || email.length === 0 || password.length === 0) {
            console.log("All fields are mandatory")
        }
        else if (username.length < 3) {
            console.log("Username must be more than 2 characters")
        }
        else if (password.length < 8) {
            console.log("Password must be more than 7 characters")
        }
        else {
            const data = await axios.post('http://localhost:5000/register', [username, email, password])

            console.log(data.data.message)

        }
    }

    return (
        <div className="box">
            <form className='form' onSubmit={submit}>
                <h1 className='title'>MessageX</h1>
                <input className='input-text' type='text' placeholder='Username' name='username' onChange={e => setUsername(e.target.value)} />
                <input className='input-text' type="email" placeholder='Email' name='email' onChange={e => setEmail(e.target.value)} />
                <input className='input-text' type="password" placeholder='Password' name='password' onChange={e => setPassword(e.target.value)} />
                <button className='btn' type='submit'>Register</button>
                <span className='endtext'>Already Registered? <Link to="/login">Login</Link></span>
            </form>

        </div>
    )
}
