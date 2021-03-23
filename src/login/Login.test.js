import { render, screen } from '@testing-library/react';
import Login from './Login.js';
import React from 'react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';

describe('Login', () => {
  const mockSubmitLogin = jest.fn();

  beforeEach(() => {
    render(
      <Login
      submit={mockSubmitLogin}
      />
    )
  })

  it('should render login titles', () => {
    const header = screen.getByText('San Junipero University');
    const subHeader = screen.getByText('Student Course Regristration');
    expect(header).toBeInTheDocument();
    expect(subHeader).toBeInTheDocument();
  })

  it('should render an input and button', () => {
    const idInput = screen.getByPlaceholderText('Enter id here');
    const loginBtn = screen.getByText('Log In');
    expect(idInput).toBeInTheDocument();
    expect(loginBtn).toBeInTheDocument();
  })

  it('should disable the button if there is no input', () => {
    const idInput = screen.getByPlaceholderText('Enter id here');
    const loginBtn = screen.getByText('Log In');
    expect(loginBtn).toBeDisabled();
    userEvent.type(idInput, '11');
    expect(loginBtn).not.toBeDisabled();
  })

  it('should call submitLogin if there is an input', () => {
    const idInput = screen.getByPlaceholderText('Enter id here');
    const loginBtn = screen.getByText('Log In');
    userEvent.type(idInput, '11');
    userEvent.click(loginBtn);
    expect(mockSubmitLogin).toHaveBeenCalled();
  })
})
