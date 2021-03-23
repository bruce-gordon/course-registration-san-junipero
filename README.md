# Guild Application | Front-End 

## Instructions
Given one hour, create an app that can perform CRUD operations on a database. The app is meant to simulate course enrollment at a school.  A student is modeled with a name, id, and email address.  Each course is modeled with a name, id, and time.

## Install Instructions:
1. First, follow the install instructions for running the backend [here](https://github.com/bruce-gordon/guild-project-server)
2. Clone down this repo
3. Run `cd guild-internship-project`
4. Run `npm install`
5. Run `npm start`
6. Once on the app, you can sign in using any of the following ids: `111`, `112`, `113`, `114`, or `115`.
7. To view the tests, run `npm test`

## Description:
This is a Couse Registration app.  Students log in using a provided id.  A student can view the Course Catalog to see available courses.  Courses for which the student is already enrolled are indicated and the "add" button is disabled.  

![site](https://user-images.githubusercontent.com/51416773/112075528-4feb8380-8b3e-11eb-8e60-2e24c3208f62.gif)

Using the navbar a student may navigate to their schedule and view their enrolled courses.  This page shows the student's information and the courses for which they enrolled.  In this view, a student may also remove a course.

A student can log out by clicking the "log out" button in the navbar.

## Reflections:
I used branches and pull requests to simulate a typical workflow.  The `development` branch contains the core work that went into the UI.  For full disclosure, I did the majority of the work within the one hour time, but did go over while working out the front-end delete logic.  I also put additional time to styling for the sake of having a better UX/UI.  The `testing` branch was not completed within the given hour.  However, I know that testing is important and wanted to included it in the submission to demonstrate what unit testing would look like for this app.

## Additional Information:
My experience is in frontend development and I was not familiar with building backend servers prior to this project.  I spent time teaching myself to build a simple server with `node.js` and `express` in order to create the backend for this project.  I enjoyed this learning opportunity!

## Tech Stack:
This project utilizes Javascript, React, and Router

*Developed by Bruce Gordon*
*****************************************************************************
