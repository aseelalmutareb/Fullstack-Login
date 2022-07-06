import { useState } from 'react'

// Fetchers
import { loginUser } from "../../fetchers"

// Components
import Update from '../update';

const Login = () => {
    const [values, setValues] = useState({  email: "", password: "" })
    const [success, setSuccess] = useState(false);
    const [userID, setUserID ] = useState("");


    const handleChange = (e) => {
        const inputValue = e.target.value
        const inputName = e.target.name

        setValues((val) => ({ ...val, [inputName]: inputValue }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        loginUser(values).then((response)=> {
            setSuccess(true);
            setUserID(response._id);
        })

    }

    return (
        <>
        {success ? <Update userID={userID} /> : (
             <form>
             <input value={values.email} onChange={handleChange} name="email" type='email' placeholder="Email" />
             <input value={values.password} onChange={handleChange} name="password" type='password' placeholder="Password" />
             <button onClick={handleSubmit}>Login</button>
         </form>
        )}
        </>

    )
}

export default Login