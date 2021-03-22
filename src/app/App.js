import './App.css';
import { useEffect, useState } from 'react';
import { Route, Switch, Link, NavLink } from 'react-router-dom';
import Login from '../login/Login.js';
import Catalog from '../catalog/Catalog.js';
import Schedule from '../schedule/Schedule.js';
import {
  getAllCourses,
  getUser,
  getUserEnrollments,
  createEnrollment,
  deleteEnrollment
} from '../apiCalls';


const App = () => {

  const [courses, setCourses] = useState([]);
  const [user, setUser] = useState({});
  const [enrollments, setEnrollments] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    getAllCourses()
      .then(resp => setCourses(resp.courses))
  }, [])

  const submitLogin = async (userId) => {
    await getUser(userId)
      .then(resp => setUser(resp))
    getUserEnrollments(userId)
      .then(resp => setEnrollments(resp))
  }

  const checkError = () => {
    if (user.message) {
      return (
        <p>
          No user with that id was found.  Please try again.
        </p>
      )
    }
  }

  const logoutUser = () => {
    setUser({});
  }

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
