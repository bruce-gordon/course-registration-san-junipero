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

  const addCourse = (courseId) => {
    createEnrollment({ userId: user.id, courseId: courseId })
      .then(resp => setEnrollments([ ...enrollments, resp ]))
  }

  const deleteCourse = async (enrollmentId) => {
    await deleteEnrollment(enrollmentId)
      .then(resp => console.log(resp.message));
    getUserEnrollments(user.id)
      .then(resp => setEnrollments(resp))
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
      <nav className='nav-bar'>
        <h1 className='nav-title'>San Junipero University
        </h1>
        <div className='nav-button-container'>
          <NavLink
            to='/'
            className='nav-link'
            exact activeClassName={'selected-link'}
          >All Courses
          </NavLink>
          <NavLink
            to='/schedule'
            className='nav-link'
            exact activeClassName={'selected-link'}
          >My Enrollments
          </NavLink>
          <NavLink
            to='/'
            className='nav-link'
            onClick={ logoutUser }
          >Log Out
          </NavLink>
        </div>
      </nav>
      <Switch>
        <Route
        exact path='/'
        render={() => {
          return (
            <Catalog
            btnFunc={ addCourse }
            courses={ courses }
            enrollmentInfo={ enrollments }
            />
          )
        }}
        >
        </Route>
        <Route
          exact path='/schedule'
          render={() => {
            return (
              <Schedule
                user={ user }
                btnFunc={ deleteCourse }
                courses={ courses }
                enrollmentInfo={ enrollments }
              />
            )
          }}
        >
        </Route>
      </Switch>
    </div>
    );
  }
}

export default App;
