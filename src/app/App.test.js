import { render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
  beforeEach(() => {
    render(
      <App />
    )
  })

  it('should render an App title', () => {
    const title = screen.getByText('San Junipero University')
    expect(title).toBeInTheDocument();
  })
})
