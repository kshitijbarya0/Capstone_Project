import React, { useState } from 'react';
import { Register } from '../Auth'; // Assuming Register function is in Auth.js
import { useNavigate } from 'react-router-dom';
import { Button, Form, Input, message } from 'antd';

function Registerform() {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const changeDir = (e) => {
        e.preventDefault();
        navigate('/login');
    };

    const onFinish = () => {
        const response = Register({ username, password, email, name });

        if (response.success) {
            message.success('Registration successful!');
            navigate('/login'); // Navigate to the login page after successful registration
        } else {
            message.error(response.error || 'Registration failed!');
        }
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
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
        <div className="Register">
            <div className="registerform">
                <h1>Register Form</h1>
                <Form
                    name="basic"
                    labelCol={{
                        span: 8,
                    }}
                    wrapperCol={{
                        span: 16,
                    }}
                    style={{
                        maxWidth: 600,
                    }}
                    initialValues={{
                        remember: true,
                    }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                >
                    <Form.Item
                        label="Name"
                        name="name"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your name!',
                            },
                        ]}
                        onChange={(e) => setName(e.target.value)}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Email ID"
                        name="email"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your email!',
                            },
                        ]}
                        onChange={(e) => setEmail(e.target.value)}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Set Username"
                        name="username"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your username!',
                            },
                        ]}
                        onChange={(e) => setUsername(e.target.value)}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Set Password"
                        name="password"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your password!',
                            },
                        ]}
                        onChange={(e) => setPassword(e.target.value)}
                    >
                        <Input.Password />
                    </Form.Item>

                    <Form.Item label={null}>
                        <Button type="primary" htmlType="submit">
                            Submit
                        </Button>
                    </Form.Item>
                </Form>
                <h3>
                    Already have an account?{' '}
                    <Button onClick={changeDir}>Login</Button>
                </h3>
            </div>
        </div>
    </>

}


export default Registerform;