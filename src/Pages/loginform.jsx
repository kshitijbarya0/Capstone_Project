import React, { useState } from 'react';
import { Form, Input, Button, Layout, Row, Col, Typography, message, Checkbox } from 'antd'; // Import Checkbox here
import { useNavigate } from 'react-router-dom';
import { login } from '../Auth'; // Import the login function from auth.js

const { Title } = Typography;
const { Content } = Layout;

const LoginPage = () => {
    const navigate = useNavigate(); // Hook to navigate after successful login
    const [loading, setLoading] = useState(false);

    const onFinish = (values) => {
        setLoading(true);
        const { username, password } = values;

        const response = login({ username, password });

        if (response.success) {
            message.success('Login successful!');
            const currentUser = JSON.parse(localStorage.getItem("currentuser"));
            navigate('/student-dashboard', { state: { user: currentUser } }); // Pass user data to the dashboard
        } else {
            message.error(response.error);
        }

        setLoading(false);
    };
    const ClickHome = () =>{
        navigate('/');
    }

    return <>
        <nav>
            <div className="logo">LearnPro</div>
            <div className="nav-links">
                <a href="" onClick={ClickHome}>Home</a>
                <a href="#features">Features</a>
                <a href="#pricing">Pricing</a>
                <a href="#contact">Contact</a>
            </div>
        </nav>
        <Layout style={{ minHeight: '100vh' }}>
            <Content style={{ padding: '50px 0' }}>
                <Row justify="center" align="middle" style={{ height: '100%' }}>
                    <Col xs={20} sm={16} md={12} lg={8} xl={6}>
                        <div style={{ background: '#fff', padding: '30px', borderRadius: '8px' }}>
                            <Title level={2} style={{ textAlign: 'center' }}>Login</Title>
                            <Form
                                name="login"
                                onFinish={onFinish}
                                initialValues={{ remember: true }}
                                layout="vertical"
                            >
                                <Form.Item
                                    label="Username"
                                    name="username"
                                    rules={[{ required: true, message: 'Please input your username!' }]}>
                                    <Input />
                                </Form.Item>

                                <Form.Item
                                    label="Password"
                                    name="password"
                                    rules={[{ required: true, message: 'Please input your password!' }]}>
                                    <Input.Password />
                                </Form.Item>

                                <Form.Item name="remember" valuePropName="checked">
                                    <Checkbox>Remember me</Checkbox> {/* Checkbox component */}
                                </Form.Item>

                                <Form.Item>
                                    <Button
                                        type="primary"
                                        htmlType="submit"
                                        block
                                        loading={loading}
                                    >
                                        Login
                                    </Button>
                                </Form.Item>

                                <Row justify="space-between">
                                    <Col>
                                        <Button type="link" onClick={() => navigate('/register')}>
                                            Don't have an account? Register here
                                        </Button>
                                    </Col>
                                    <Col>
                                        <Button type="link" onClick={() => navigate('/forgot-password')}>
                                            Forgot password?
                                        </Button>
                                    </Col>
                                </Row>
                            </Form>
                        </div>
                    </Col>
                </Row>
            </Content>
        </Layout>
    </>
};

export default LoginPage;
