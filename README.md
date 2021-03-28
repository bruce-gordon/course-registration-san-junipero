# Course Registration | Front-End | San Junipero University

## Goal
Create an app that can perform CRUD operations on a database. The app is meant to simulate university course enrollment.  A student is modeled with a name, id, and email address.  Each course is modeled with a name, id, and time.  I was given three business days to complete this task.

## Install Instructions:
1. First, follow the install instructions for running the backend [here](https://github.com/bruce-gordon/san-junipero-server)
2. Clone down this repo
3. Run `cd course-registration-san-junipero`
4. Run `npm install`
5. Run `npm start`
6. Once on the app, you can sign in using any of the following ids: `111`, `112`, `113`, `114`, or `115`.
7. To view the tests, run `npm test`

## Description:
This is a Couse Registration app.  Students log in using a provided id.  A student can view the Course Catalog to see available courses.  Courses for which the student is already enrolled are indicated and the "add" button is disabled.  

![site](https://user-images.githubusercontent.com/51416773/112075528-4feb8380-8b3e-11eb-8e60-2e24c3208f62.gif)

Using the navbar a student may navigate to their schedule and view their enrolled courses.  This page shows the student's information and the courses for which they enrolled.  In this view, a student may also remove a course.

A student can log out by clicking the "log out" button in the navbar.

## Process:
My experience is in frontend development and I was not familiar with building backend servers prior to this project.  I taught myself to build a server with `node.js` and `express` in order to create the backend for this project.  I enjoyed this learning opportunity!

I carefully planned and prepared to make sure that my time would be used effectively.  I worked out a wireframe using Excalidraw and tested my server endpoints in Postman prior to beginning work on the frontend app.

![login](https://user-images.githubusercontent.com/68293135/112539857-b9ea6f80-8d6e-11eb-95a0-946867a65edd.png)

![Courses](https://user-images.githubusercontent.com/68293135/112539879-c1117d80-8d6e-11eb-8e50-ab61d58867cc.png)

![Enrollments](https://user-images.githubusercontent.com/68293135/112539900-ca9ae580-8d6e-11eb-8e5a-0f87ca543ca2.png)

## Tech Stack:
This project utilizes Javascript, React, and Router

*Developed by Bruce Gordon*
*****************************************************************************
