import React, {useState} from 'react';
import './Login.css'

 function Login({login}){

    const [input, setInput] = useState({email: '', password: ''})

    const submitHandler = (event) => {
        event.preventDefault()
        fetch(`http://localhost:9000/login/${encodeURIComponent(event.currentTarget.elements.email.value)}/${encodeURIComponent(event.currentTarget.elements.password.value)}`)
        .then(response => response.json())
        .then(data => {
            login(data)
            setInput({...input, email: '', password: ''})
        })
    }

    return (
        <div className='login'>
            <div className='background'>
                <form className='loginForm' onSubmit={submitHandler}>
                    <p className='title'>Log In</p>
                    <input type='email' placeholder='Email Address' className='email' id='email' onChange={e => setInput({...input, email: e.target.value})} value={input.email} required></input>
                    <input type='password' placeholder='Password' className='pass' id='password' onChange={e => setInput({...input, password: e.target.value})} value={input.password} required></input>
                    <button className='submit'>Log In</button>
                </form>
            </div>
        </div>
    )
}

export default Login;