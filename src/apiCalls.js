export const getAllCourses = () => {
  return fetch('http://localhost:3001/courses/')
    .then(resp => resp.json())
}

export const getUser = (userId) => {
  return fetch(`http://localhost:3001/users/${userId}`)
    .then(resp => resp.json())
}

export const getUserEnrollments = (userId) => {
  return fetch(`http://localhost:3001/users/enrollments/${userId}`)
    .then(resp => resp.json())
}

export const createEnrollment = (enrollmentInfo) => {
  return fetch(`http://localhost:3001/enrollments/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(enrollmentInfo)
  })
    .then(resp => resp.json())
}

export const deleteEnrollment = (enrollmentId) => {
  return fetch(`http://localhost:3001/enrollments/${enrollmentId}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json"
    }
  })
    .then(resp => resp.json())
}
