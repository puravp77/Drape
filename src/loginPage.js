import './loginpage.css';

import { useNavigate } from 'react-router-dom';




export default function LoginPage() {
 const navigate = useNavigate();


  return ( 
  

    <div className="login-container">
      
  <div className="login-box">
    <h1 className="login-title">Welcome to Drapefit..</h1>
    <form className="login-form">
      <input type="text" placeholder="Username" className="login-input" />
      <input type="password" placeholder="Password" className="login-input" />
      <button className="login-button" onClick={() => navigate('/')}>Login</button>
     
     <p className="signup-title"> Don't have an account ?? </p> 
    <button className="signup-button" onClick={() => navigate('/signup-page')}> Sign up </button>
    </form>
  </div>
</div>

  );
}