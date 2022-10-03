import * as React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter, MemoryRouter } from 'react-router-dom';
import App from './App';
import { ScheduleNewSession } from './pages/ScheduleNewSession';
import { TutorDashboard } from './pages/TutorDashboard';
import { Button } from '@mui/material';
import userEvent from '@testing-library/user-event';
import SignUpPage from './pages/SignUpPage';

describe('full App', () => {
  test('the full app should render/navigate', () => {
    render(<App />, { wrapper: BrowserRouter });
    // const user = userEvent.setup()
    expect(screen.getByText(/sign in/i)).toBeInTheDocument();
  });
});

describe('signup page', () => {
  test('the signup page', () => {
    render(<SignUpPage />, { wrapper: BrowserRouter });
    expect(screen.getByText(/sign up/i)).toBeInTheDocument();
  });
});

describe('Signup Page', () => {
  test('signup page should be in the document', () => {
    render(<ScheduleNewSession />);
    const inputNode = screen.getByText('Available Sessions');
    expect(inputNode).toBeInTheDocument();
  });
});

describe('Session scheduling page', () => {
  test('scheduling page should be in the document', () => {
    render(<ScheduleNewSession />);
    const inputNode = screen.getByText('Available Sessions');
    expect(inputNode).toBeInTheDocument();
  });
});

describe('Tutor Dashboard page', () => {
  test('Tutor scheduling page should be in the document', () => {
    render(<TutorDashboard />);
    const inputNode = screen.getByText('Upcoming Sessions');
    expect(inputNode).toBeInTheDocument();
  });

  // test('should render a button', () => {
  //   render(<TutorDashboard/>)
  //   expect(screen.getByRole('button').toHaveTextContent('Update Availability'))
  // });

  // test('button should say update availability', () => {
  //   render()

  //   const updateButton = getByTestID('update-avail');

  //   expect(updateButton).toHaveTextContent('Update Availability')
  // });

  // test('clicking the button triggers the onClick function', () => {
  //   const buttonHandler = jest.fn();
  //   render(<Button onClick={buttonHandler} />);
  //   fireEvent.click(screen.getByText('Update Availability'));
  //   expect(buttonHandler).toHaveBeenCalled();
  // });
});

//need to address routing of the Student Dashboard page
// describe('Student Dashboard page', () => {
//   test('Student scheduling page should be in the document', () => {
//     render(<StudentDashboard />);
//     const inputNode = screen.getByText('Upcoming Sessions');
//     expect(inputNode).toBeInTheDocument();
//   });
// });
