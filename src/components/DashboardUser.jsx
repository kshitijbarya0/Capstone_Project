import React, { useState } from 'react';
import { Layout, Row, Col, Input, Button } from 'antd';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for redirection
import Sidebar from './Sidebar';
import CourseList from './CourseList';
import { logout } from '../Auth'; // Import logout function from auth file

const { Header, Content } = Layout;

const DashboardUser = () => {
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
    <Layout>
      <Sidebar />
      <Layout style={{ padding: '0 24px 24px' }}>
        <Header style={{ padding: 0 }}>
          <Row justify="center" align="middle">
            <Col>
              <Input.Search
                placeholder="Search for a course..."
                style={{ width: '300px', marginTop: '20px' }}
                onSearch={handleSearch}
                enterButton
              />
            </Col>
            <Col>
              <Button 
                type="primary" 
                style={{ marginLeft: '55vw', marginTop: '20px' }} 
                onClick={handleLogout}
              >
                Logout
              </Button>
            </Col>
          </Row>
        </Header>
        <Content
          style={{
            padding: 24,
            margin: 0,
            minHeight: 280,
          }}
        >
          <CourseList searchQuery={searchQuery} />
        </Content>
      </Layout>
    </Layout>
  );
};

export default DashboardUser;
