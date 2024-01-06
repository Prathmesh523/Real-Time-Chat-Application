import { useState } from 'react'
import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import '../styles/Auth.css'

export default function Login() {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const submit = async (e) => {
        e.preventDefault()
        if (username.length === 0 || password.length === 0) {
            console.log("All fields are mandatory")
        }
        else if (username.length < 3) {
            console.log("Username must be more than 2 characters")
        }
        else if (password.length < 8) {
            console.log("Password must be more than 7 characters")
        }
        else {
            const data = await axios.post('http://localhost:5000/users/login', [username, password])
            if(data.data.status)
            {
                console.log(data.data.message)
                console.log(data.data.token)
                localStorage.setItem("token",data.data.token)
            }
        }
    }
    return (
        <div className="form-container">
            <div className="form-container-details">
                <div className="form-container-title">
                     MessageX
                </div>
                <div className="form-container-subtitle">
                    Login
                </div>
            </div>
            <form className='form' onSubmit={submit}>
                <div className="form-field">
                    <input className='form-input' type='text' placeholder='Username' name='username' onChange={e => setUsername(e.target.value)} />
                </div>
                <div className="form-field">
                    <input className='form-input' type="password" placeholder='Password' name='password' onChange={e => setPassword(e.target.value)} />
                </div>

                <button className='form-submit' type='submit'>Login</button>
            </form>
            <div className="form-container-links">
                <span className='form-container-link'>Not created account yet? <Link to="/register">Register</Link></span>
            </div>
            
        </div>
    )
}
