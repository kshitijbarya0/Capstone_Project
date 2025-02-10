import React from 'react';
import { Link } from 'react-router-dom';
import {Layout,Menu } from 'antd';

const { Sider } = Layout;

const Sidebar = () => {
  return (
    <Sider width={200} style={{ background: '#fff' }}>
      <Menu
        mode="inline"
        defaultSelectedKeys={['1']}
        style={{ height: '100%', borderRight: 0 }}
      >
        <Menu.Item key="1">
          <Link to="/student-dashboard">Dashboard</Link>
        </Menu.Item>
        <Menu.Item key="2">
          <Link to="/pyq">PYQ</Link>
        </Menu.Item>
        <Menu.Item key="3">
          <Link to="/mcq">MCQ Practice</Link>
        </Menu.Item>
        <Menu.Item key="4">
          <Link to="/result-analysis">Result Analysis</Link>
        </Menu.Item>
        <Menu.Item key="5">
          <Link to="/course-viedoes">Course Lecture</Link>
        </Menu.Item>
      </Menu>
    </Sider>
  );
};

export default Sidebar;
