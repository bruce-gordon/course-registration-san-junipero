import React, { useState } from 'react';
import Course from '../course/Course.js';
import './Catalog.css';

const Catalog = ({ btnFunc, courses, enrollmentInfo }) => {

  const userCourses = enrollmentInfo.reduce((result, userCourse) => {
    let match = courses.find(course => course.courseId === userCourse.courseId);
    result.push(match)
    return result
  }, [])

  const availableCourses = courses.map(course => {
    return (
      <Course
        key={ course.courseId }
        id={ course.courseId }
        name={ course.name }
        time={ course.time }
        btnText='+'
        btnFunc={ btnFunc }
        enrollmentInfo={ '' }
        userCourses={ enrollmentInfo }
      />
    )
  })

  return (
    <div className='homepage'>
      <h2>
        Course Catalog
      </h2>
      <section className='card-container'>
        { availableCourses }
      </section>
    </div>
  )
}

export default Catalog;
