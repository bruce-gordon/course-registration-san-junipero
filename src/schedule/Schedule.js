import React, { useState } from 'react';
import Course from '../course/Course.js';
import './Schedule.css';

const Schedule = ({ user, btnFunc, courses, enrollmentInfo }) => {

  const myCourses = enrollmentInfo.reduce((result, enrollment) => {
    let match = courses.find(courses => courses.courseId === enrollment.courseId);
    result.push(match)
    return result
  }, [])

  const enrollments = myCourses.map(course => {
    return (
      <Course
        key={ course.courseId }
        id={ course.courseId }
        name={ course.name }
        time={ course.time }
        btnText='-'
        btnFunc={ btnFunc }
        enrollmentInfo={ enrollmentInfo }
        userCourses={ '' }
      />
    )
  })

  return (
    <div className='homepage'>
      <h2>
        My Enrolled Courses
      </h2>
      { !enrollments.length && <p>You have not enrolled in any courses yet.  Click "All Courses" to get started!</p>}
      <div className='my-enrollments-info'>
        <section className='user-info'>
          <h4>Student Name - { user.name }</h4>
          <h4>Email - { user.email }</h4>
        </section>
        <section className='card-container'>
          { enrollments }
        </section>
      </div>
    </div>
  )
}

export default Schedule;
