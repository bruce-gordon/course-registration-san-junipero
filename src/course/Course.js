import React, { useState } from 'react';
import './Course.css';


const Course = ({ id, name, time, btnText, btnFunc, enrollmentInfo, userCourses }) => {
  const [isDisabled, setIsDisabled] = useState(false);

  const handleClick = () => {
    setIsDisabled(true)
    if (enrollmentInfo) {
      // btnFunc()
    } else {
      btnFunc(id)
    }
  }

  const getEnrollmentId = () => {
    const enrollment = enrollmentInfo.find(enrollment => enrollment.petId === id)
    return enrollment.id;
  }

  const checkDisabled = () => {
    let included = false;
    if (userCourses) {
      userCourses.forEach(enrollment => {
        if (enrollment.petId === id) {
          included = true;
        }
      })
    }
    return included
  }

  const getButtonStyle = () => {
    return checkDisabled() ? 'disabled-button' : 'card-button'
  }


  return (
    <div className='card'>
      <div className='details'>
        <h3 className='card-detail'>{ name }</h3>
        <button
          className={ getButtonStyle() }
          disabled={ checkDisabled() }
          onClick={ handleClick }>
          {btnText}
        </button>
      </div>
      <p className='card-detail'><i>Time:</i> { time }</p>
      <p className='card-detail'><i>Course id:</i> { id }</p>
    </div>
  )
}

export default Course;
