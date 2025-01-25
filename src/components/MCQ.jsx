import React, { useState } from 'react';
import { Input, Row, Col, Card, Button, Layout } from 'antd';
import Sidebar from './Sidebar';

const { Content } = Layout;

const MCQ = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (value) => {
    setSearchQuery(value.toLowerCase());
  };

  const mcqs = [
    { title: 'Maths MCQ - Basic Algebra', difficulty: 'Easy', link: '/mcq1' },
    { title: 'Physics MCQ - Mechanics', difficulty: 'Medium', link: '/mcq2' },
    { title: 'Chemistry MCQ - Organic Chemistry', difficulty: 'Hard', link: '/mcq3' },
    // Add more MCQs as needed
  ];

  const filteredMCQs = mcqs.filter(mcq =>
    mcq.title.toLowerCase().includes(searchQuery) ||
    mcq.difficulty.toLowerCase().includes(searchQuery)
  );

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sidebar />
      <Layout style={{ marginLeft: 0, padding: '20px' }}>
        <Content>
          <Input.Search
            placeholder="Search for MCQs..."
            style={{ width: '300px', marginBottom: '20px' }}
            onSearch={handleSearch}
            enterButton
          />
          <Row gutter={16}>
            {filteredMCQs.map((mcq, index) => (
              <Col xs={24} sm={12} md={8} key={index}>
                <Card
                  hoverable
                  title={mcq.title}
                  extra={<a href={mcq.link} target="_blank" rel="noopener noreferrer">Start Quiz</a>}
                >
                  <p>Difficulty: {mcq.difficulty}</p>
                  <Button type="primary">Take Quiz</Button>
                </Card>
              </Col>
            ))}
          </Row>
        </Content>
      </Layout>
    </Layout>
  );
};

export default MCQ;
