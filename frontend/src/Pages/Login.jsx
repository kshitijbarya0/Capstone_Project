import "../styles/Combine_login_reg.css";
import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await login({ email, password });

    if (response.success) {
      alert("Login successful!");
      setTimeout(() => navigate("/user-dashboard"), 1000);
    } else {
      alert(response.message);
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <div className="login-header">
          <h2>Welcome Back</h2>
          <p>Login to continue your learning journey</p>
        </div>
        
        <div className="login-body">
          <form className="login-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
              />
            </div>

            <div className="form-group">
              <div className="password-header">
                <label htmlFor="password">Password</label>
                <button
                  type="button"
                  onClick={() => navigate("/forgot-password")}
                  className="forgot-password"
                >
                  Forgot Password?
                </button>
              </div>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                required
              />
            </div>

            <button type="submit" className="login-button">
              Sign In
            </button>
          </form>

          <div className="register-prompt">
            <p>
              Don't have an account?{" "}
              <button
                type="button"
                onClick={() => navigate("/register")}
                className="register-link"
              >
                Create Account
              </button>
            </p>
          </div>

          <div className="terms-section">
            <p>
              By logging in, you agree to our{" "}
              <a href="/terms" className="terms-link">Terms of Service</a> and{" "}
              <a href="/privacy" className="terms-link">Privacy Policy</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;