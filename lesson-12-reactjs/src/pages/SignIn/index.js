import React,{useState} from 'react'
import {Link, useHistory} from 'react-router-dom'
import './style.css'
import { SIGN_UP, SIGN_IN } from '../../constants/global'

const SignIn = () => {
    let history = useHistory();
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit =()=>{
        console.log(email)
        console.log(password)
        history.push({pathname: '/home'})
    }
    return (
        <div className="sign-in">
            <form onSubmit={handleSubmit}>
                <label>
                    <p>Email</p>
                    <input type="text" value={email} onChange={e => setEmail(e.target.value)}/>
                </label>
                <label>
                    <p>Password</p>
                    <input type="password" value={password} onChange={e => setPassword(e.target.value)}  />
                </label>
                <div>
                    <button type="submit">{SIGN_IN}</button>
                    <button type="submit">{SIGN_UP}</button>
                </div>
            </form>
        </div>
    )
}
export default SignIn
