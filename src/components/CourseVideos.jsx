import {Layout, Input, Row, Col,Button} from 'antd';
import React from 'react';
import Sidebar from './SideBar';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for redirection
import CourseList from './CourseList';
import { useState } from 'react';
const { Header, Content } = Layout;
function CourseVideos() {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate(); // Initialize useNavigate

  const handleSearch = (value) => {
    setSearchQuery(value.toLowerCase());
  };

  const handleLogout = () => {
    logout(); // Call the logout function to clear user data from localStorage
    navigate('/login'); // Redirect to the login page after logout
  };
  return (
    <div>
        <h1>hello</h1>
        <h1>capstone </h1>
    </div>
  )
}

export default CourseVideos
