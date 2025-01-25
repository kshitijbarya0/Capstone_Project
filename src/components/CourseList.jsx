import React, { useState, useEffect } from 'react';
import { Card, Row, Col, Button } from 'antd';

const CourseList = ({ searchQuery }) => {
  const [courses, setCourses] = useState([
    { title: 'Course 1', description: 'PDF Notes', link: '/course1.pdf' },
    { title: 'Course 2', description: 'Handwritten Notes', link: '/course2.pdf' },
    { title: 'Course 3', description: 'PDF Notes', link: '/course3.pdf' }, 
    { title: 'Course 3', description: 'PDF Notes', link: '/course3.pdf' }, 
    { title: 'Course 3', description: 'PDF Notes', link: '/course3.pdf' }, 
    { title: 'Course 3', description: 'PDF Notes', link: '/course3.pdf' }, 
    { title: 'Course 3', description: 'PDF Notes', link: '/course3.pdf' }, 
    { title: 'Course 3', description: 'PDF Notes', link: '/course3.pdf' }, 
    // Add more courses as needed
  ]);

  // Filter courses based on search query
  const filteredCourses = courses.filter(course =>
    course.title.toLowerCase().includes(searchQuery) ||
    course.description.toLowerCase().includes(searchQuery)
  );

  return (
    <Row gutter={16}>
      {filteredCourses.map((course, index) => (
        <Col span={8} key={index}>
          <Card
            hoverable
            title={course.title}
            extra={<a href={course.link} target="_blank" rel="noopener noreferrer">Download</a>}
          >
            <p>{course.description}</p>
            <Button type="primary">View Notes</Button>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default CourseList;
