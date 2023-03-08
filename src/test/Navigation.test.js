import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { BrowserRouter as Router, Outlet, Route, Routes } from 'react-router-dom';
import LeftSideMenu from '../components/admin/LeftSideMenu';
import AdminDashboard from '../components/admin/AdminDashboard';
import ViewAllPosts from '../components/admin components/ViewAllPosts';
import ViewAllUser from '../components/admin components/ViewAllUser';


describe('User Dashboard component', () => {
  it('navigates to the correct page when a link is clicked', () => {
    const { getByTestId, getByText } = render(
      <Router>
        <AdminDashboard />
        <ViewAllPosts />
        <ViewAllUser />
        
        <Routes>
            <Route path="/admin/dashboard/allPosts">View All Post</Route>
            <Route path="/admin/dashboard/allUser">View All User</Route>
        </Routes>
      </Router>
    );

    fireEvent.click(getByTestId("menuViewAllPost")); 
    expect(getByTestId('viewAllPostTest').textContent).toBe('View All Post');

    fireEvent.click(getByTestId("menuViewAllUser")); 
    expect(getByTestId("viewAllUserTest").textContent).toBe('View All User');
  });
});
