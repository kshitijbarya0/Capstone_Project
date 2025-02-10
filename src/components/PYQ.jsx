import React, { useState } from 'react';
import { Input, Row, Col, Card, Button, Layout } from 'antd';
import Sidebar from './SideBar';

const { Content } = Layout;

const PYQ = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (value) => {
    setSearchQuery(value.toLowerCase());
  };

  const pyqs = [
    { title: 'Maths PYQ - Algebra', link: '/maths-algebra-pyq' },
    { title: 'Physics PYQ - Mechanics', link: '/physics-mechanics-pyq' },
    { title: 'Chemistry PYQ - Organic Chemistry', link: '/chemistry-organic-pyq' },
    // Add more PYQs as needed
  ];

  const filteredPYQs = pyqs.filter(pyq =>
    pyq.title.toLowerCase().includes(searchQuery)
  );

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sidebar />
      <Layout style={{ marginLeft:0, padding: '20px' }}>
        <Content>
          <Input.Search
            placeholder="Search for PYQ..."
            style={{ width: '300px', marginBottom: '20px' }}
            onSearch={handleSearch}
            enterButton
          />
          <Row gutter={16}>
            {filteredPYQs.map((pyq, index) => (
              <Col xs={24} sm={12} md={8} key={index}>
                <Card
                  hoverable
                  title={pyq.title}
                  extra={<a href={pyq.link} target="_blank" rel="noopener noreferrer">Start PYQ</a>}
                >
                  <Button type="primary">Start PYQ</Button>
                </Card>
              </Col>
            ))}
          </Row>
        </Content>
      </Layout>
    </Layout>
  );
};

export default PYQ;
