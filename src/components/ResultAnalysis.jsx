import React, { useState } from 'react';
import { Input, Row, Col, Card, Statistic, Button, Layout } from 'antd';
import { Line } from 'react-chartjs-2';
import Sidebar from './Sidebar';
import { Chart as ChartJS } from 'chart.js';
import { Chart, LinearScale, CategoryScale, PointElement, LineElement } from 'chart.js';

// Register all necessary components
Chart.register(LinearScale, CategoryScale, PointElement, LineElement);

// Register the necessary components
ChartJS.register(CategoryScale);

const { Content } = Layout;

const ResultAnalysis = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (value) => {
    setSearchQuery(value.toLowerCase());
  };

  const results = [
    { course: 'Maths', score: 85, date: '2024-01-10' },
    { course: 'Physics', score: 90, date: '2024-01-15' },
    { course: 'Chemistry', score: 78, date: '2024-01-18' },
    // Add more results as needed
  ];

  const filteredResults = results.filter(result =>
    result.course.toLowerCase().includes(searchQuery) ||
    result.date.includes(searchQuery)
  );

  const data = {
    labels: ['January 2024'],
    datasets: [
      {
        label: 'Scores',
        data: [85, 90, 78], // Example scores
        borderColor: '#4bc0c0',
        fill: false,
      },
      {
        label: 'Scores',
        data: [120,0, 78], // Example scores
        borderColor: '#4bc0c0',
        fill: false,
      },
    ],
  };

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sidebar />
      <Layout style={{ marginLeft:0, padding: '20px' }}>
        <Content>
          <Row gutter={16}>
            {/* Performance Overview Cards */}
            <Col xs={24} sm={12} md={8}>
              <Card title="Performance Overview">
                <Statistic title="Total Score" value={85} />
                <Statistic title="Average Score" value={84.3} />
                <Statistic title="Improvement" value="5%" />
              </Card>
            </Col>

            {/* Score Trend Chart */}
            <Col xs={24} sm={12} md={16}>
              <Card title="Score Trend">
                <Line data={data} />
              </Card>
            </Col>

            {/* Filtered Result Cards */}
            {filteredResults.map((result, index) => (
              <Col xs={24} sm={12} md={8} key={index}>
                <Card title={result.course}>
                  <p>Score: {result.score}</p>
                  <p>Date: {result.date}</p>
                </Card>
              </Col>
            ))}
          </Row>
        </Content>
      </Layout>
    </Layout>
  );
};

export default ResultAnalysis;
