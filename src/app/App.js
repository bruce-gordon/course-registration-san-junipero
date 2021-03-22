import './App.css';
import { useEffect, useState } from 'react';
import { Route, Switch, Link, NavLink } from 'react-router-dom';
import Login from '../login/Login.js';
import Catalog from '../catalog/Catalog.js';
import Schedule from '../schedule/Schedule.js';


const App = () => {

  const [courses, setCourses] = useState([]);
  const [user, setUser] = useState({});
  const [enrollments, setEnrollments] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {

  }, [])

  if (!user.id) {
    return (
      <div className="App-login">
        <Login
        submit={submitLogin}
        />
        { checkError() }
      </div>
    )
  } else {
    return (
      <div className="App">
      Hello, world
      </div>
    );
  }
}

export default App;
