import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navigation from './components/Navigation';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Dashboard from './components/Dashboard';
import CreatePost from './components/CreatePost';
import HomeImg from './components/HomeImg';
import ViewPost from './components/ViewPost';
import ViewProfile from './components/ViewProfile';
import Feed from './components/Feed';
import Friends from './components/Friends';
import AdminDashboard from './components/admin/AdminDashboard';
import ViewAllUser from './components/admin components/ViewAllUser';
import ViewAllPosts from './components/admin components/ViewAllPosts';
import ViewAdminProfile from './components/admin components/ViewAdminProfile';
import ViewAllUserPost from './components/ViewAllUserPost';
import AddProfilePic from './components/AddProfilePic';
import EditProfile from './views/EditProfile';
import Logout from './components/auth/Logout';
import EditPostPicture from './components/EditPostPicture';
import AdminLogin from './components/admin components/AdminLogin';
import ViewPendingRequest from './components/ViewPendingRequest';
import ViewFriends from './components/ViewFriends';
import ViewAllComments from './components/admin components/ViewAllComments';
import AdminSignup from './components/admin components/AdminSignup';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <BrowserRouter>
      <Routes>
      
        <Route path="/" element={<Navigation/>}>
          <Route path="/home" element={<HomeImg />} />
        </Route>

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/photobucket/admin/register" element={<AdminSignup />} />
        
        
        <Route path="/user/dashboard" element={<Dashboard />} >
          <Route path="createPost" element={<CreatePost />} />
          <Route path="userProfile" element={<ViewProfile />} />
          <Route path="feed" element={<Feed />} />
          <Route path="friends" element={<Friends />} />
          <Route path="viewAllUserPost" element={<ViewAllUserPost />} />
          <Route path="addProfilePic" element={<AddProfilePic />} />
          <Route path="editProfile" element={<EditProfile />} />
          <Route path="editPostPicture" element={<EditPostPicture />} />
          <Route path="viewPendingRequest" element={<ViewPendingRequest />} />
          <Route path="viewFriends" element={<ViewFriends />} />
          <Route path="logout" element={<Logout />} />
         </Route> 

        <Route path="/admin/dashboard" element={<AdminDashboard />} >
          
          <Route path="allUser" element={<ViewAllUser />} />
          <Route path="allPosts" element={<ViewAllPosts />} />
          <Route path="adminProfile" element={<ViewAdminProfile />} />
          <Route path="allComments/:postid" element={<ViewAllComments />} />
          <Route path="logout" element={<Logout />} />
        </Route>
      </Routes>

      
      
    </BrowserRouter>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
