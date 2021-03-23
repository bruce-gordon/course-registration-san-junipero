import { render, screen } from '@testing-library/react';
import Catalog from './Catalog.js';
import React from 'react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';

describe('Catalog', () => {
  const mockAddCourse = jest.fn();

  beforeEach(() => {
    render(
      <Catalog
      btnFunc={ mockAddCourse }
      courses={ [{ courseId: 9999, name: 'Archery', time: '1:00 p.m.'}] }
      enrollmentInfo={ [] }
      />
    )
  })

  it('should render title', () => {
    const header = screen.getByText('Course Catalog');
    expect(header).toBeInTheDocument();
  })

  it('should render a card for the available course', () => {
    const couseName = screen.getByText('Archery');
    const time = screen.getByText('1:00 p.m.');
    const courseId = screen.getByText(9999);

    expect(couseName).toBeInTheDocument();
    expect(time).toBeInTheDocument();
    expect(courseId).toBeInTheDocument();
  })

  it('should enroll the course if add button is clicked', () => {
    const btn = screen.getByText('+');
    userEvent.click(btn);
    expect(mockAddCourse).toHaveBeenCalled();
  })

  it('should have an add button', () => {
    const btn = screen.getByText('+');
    expect(btn).toBeInTheDocument();
  })
})
