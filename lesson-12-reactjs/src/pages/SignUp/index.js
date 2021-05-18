import React,{useState} from 'react'
import './style.css'

const SignUp = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit =()=>{
        console.log(email)
        console.log(password)
    }
    return (
        <div className="sign-up">
            <form onSubmit={handleSubmit}>
                <label>
                    <p>Email</p>
                    <input type="text" value={email} onChange={e => setEmail(e.target.value)} />
                </label>
                <label>
                    <p>Password</p>
                    <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
                </label>
                <div>
                    <button type="submit">Sign Up</button>
                </div>
            </form>
        </div>
    )
}
export default SignUp
