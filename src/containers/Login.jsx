import React, {useRef} from 'react'
import '../styles/Login.scss'

const Login = () => {  
  const form = useRef(null);
  
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(form.current);
    const data = {
			usename: formData.get('email'),
			password: formData.get('password')
		}
		console.log(data);
  }

    return (
<div className="login">
    <div className="form-container">
      <img src="./logos/logo_yard_sale.svg" alt="logo" className="logo" />

      <h1 className="title">Create a new password</h1>
      <p className="subtitle">Enter a new passwrd for yue account</p>

      <form action="/" className="form" ref={form}>
      <label for="email" className="label">Email</label>
        <input type="text" name="email" placeholder="correo@correo.com" className="input input-email" />
        <label for="password" className="label">Password</label>
        <input type="password" name="password" placeholder="*********" className="input input-password" />
        <button 
        type="submit" 
        onClick={handleSubmit}
        className='primary-button login-button'>Log in</button>
        <label for="new-password" className="label"> Password</label>
      </form>
      <button className="secondary-button signup-button" onClick={handleSubmit}>sign up</button>
    </div>
  </div>

    )
}

export default Login;
