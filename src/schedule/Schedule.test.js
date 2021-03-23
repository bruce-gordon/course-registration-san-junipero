import { render, screen } from '@testing-library/react';
import Schedule from './Schedule.js';
import React from 'react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';

describe('Schedule', () => {
  const mockDeleteCourse = jest.fn();

  beforeEach(() => {
    render(
      <Schedule
        user={ { id: 100, name: 'Mike', email: 'mike@sanjunipero.edu'} }
        btnFunc={ mockDeleteCourse }
        courses={ [{ courseId: 9999, name: 'Archery', time: '1:00 p.m.'}] }
        enrollmentInfo={ [{ enrollmentId: 88, courseId: 9999, userId: 100}] }
      />
    )
  })

  it('should render title', () => {
    const header = screen.getByText('My Enrolled Courses');
    expect(header).toBeInTheDocument();
  })

  it('should render user info', () => {
    const userName = screen.getByText('Student Name - Mike');
    const userEmail = screen.getByText('Email - mike@sanjunipero.edu');
    expect(userName).toBeInTheDocument();
    expect(userEmail).toBeInTheDocument();
  })

  it('should render a card for the enrollment', () => {
    const courseName = screen.getByText('Archery');
    const time = screen.getByText('1:00 p.m.');
    const courseId = screen.getByText(9999);

    expect(courseName).toBeInTheDocument();
    expect(time).toBeInTheDocument();
    expect(courseId).toBeInTheDocument();
  })

  it('should remove the card if deleted', () => {
    const btn = screen.getByText('-');
    userEvent.click(btn);
    expect(mockDeleteCourse).toHaveBeenCalled();
  })

  it('should have a delete button', () => {
    const btn = screen.getByText('-');
    expect(btn).toBeInTheDocument();
  })
})
