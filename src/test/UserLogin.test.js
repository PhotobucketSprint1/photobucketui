// import { render, screen, fireEvent } from '@testing-library/react';
// import { MemoryRouter } from 'react-router-dom';
// import Login from '../components/auth/Login';



// describe('Navigation from Login to Dashboard', () => {
// test('should navigate to dashboard after successful login', async () => {
//  render(<MemoryRouter><Login /></MemoryRouter>
//  );
//  const username = screen.getByTestId('usernameTest');
//  const passwordInput = screen.getByTestId('passwordTest');
//  const submitButton = screen.getByTestId("signTestBtn");
//  fireEvent.change(username, { target: { value: 'test@example.com' } });
//  fireEvent.change(passwordInput, { target: { value: 'password123' } });
//  fireEvent.click(submitButton);// wait for the dashboard to be rendered
//  const dashboardTitle = await screen.findByTestId('createPostTest');// assert that the dashboard is rendered
//  expect(dashboardTitle).toBeInTheDocument();
// });
// });