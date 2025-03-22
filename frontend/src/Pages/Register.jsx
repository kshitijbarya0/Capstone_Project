import "../styles/Combine_login_reg.css";
import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const { register } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await register({ email, password, username });

    if (response.success) {
      alert("Registered successfully! Redirecting...");
      setTimeout(() => navigate("/user-dashboard"), 1500);
    } else {
      alert(response.message || "Email already exists! Please login");
    }
  };

  return (
    <div className="register-container">
      <div className="register-card">
        <div className="register-header">
          <h2>Create Your Account</h2>
          <p>Join our learning community today</p>
        </div>

        <div className="register-body">
          <form onSubmit={handleSubmit} className="register-form">
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input
                id="username"
                type="text"
                placeholder="Choose a username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                id="email"
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                id="password"
                type="password"
                placeholder="Minimum 8 characters"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <button type="submit" className="register-button">
              Create Account
            </button>
          </form>

          <div className="login-prompt">
            <p>
              Already have an account?{" "}
              <button 
                type="button"
                className="login-link" 
                onClick={() => navigate("/login")}
              >
                Sign In
              </button>
            </p>
          </div>

          <div className="terms-section">
            <p>
              By creating an account, you agree to our{" "}
              <a href="/terms" className="terms-link">Terms of Service</a> and{" "}
              <a href="/privacy" className="terms-link">Privacy Policy</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;