import './Login.css';
import { useState } from 'react';

const Login = ({ submit }) => {

  const [loginValue, setLoginValue] = useState('');

  const handleChange = (e) => {
    setLoginValue(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    submit(loginValue)
  }

  const checkForInput = () => {
    return (loginValue) ? false : true
  }

  return (
    <div className='login'>
        <h1>San Junipero University</h1>
        <h2>Student Course Regristration</h2>
        <input
          className='login-field'
          type='text'
          value={ loginValue }
          onChange={ handleChange }
          placeholder='Enter id here'>
        </input>
        <button
          onClick={ handleSubmit }
          disabled={ checkForInput() }
          className='login-button'>Log In
        </button>
      </div>
  );
}

export default Login;
