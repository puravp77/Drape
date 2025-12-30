import './signup.css';

import { useNavigate } from 'react-router-dom';




export default function Signup() {
 const navigate = useNavigate();


  return ( 
  

    <div className="sign-container">
      
  <div className="sign-box">
    <h1 className="sign-title">Welcome to Drapefit..</h1>
    <form className="sign-form">
      <input type="text" placeholder="Username" className="login-input" />
      <input type="password" placeholder="Set Password" className="login-input" />
      <input type="password" placeholder="Confirm Password" className="login-input" />
      <input type="text" placeholder="Email ID" className="login-input" />
      <input type="password" placeholder="Contact" className="login-input" />

      
     
    <button className="signup-button" onClick={() => navigate('/')}> Sign up </button>
    </form>
  </div>
</div>

  );
}


