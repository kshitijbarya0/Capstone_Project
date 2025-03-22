import "../styles/reset_password.css";
import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const ResetPassword = () => {
  const { resetPassword } = useAuth();
  const { token } = useParams();
  const navigate = useNavigate();
  const [otp, setOtp] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");
    setError("");

    if (password !== confirmPassword) {
      setError("Passwords do not match!");
      setLoading(false);
      return;
    }

    // Updated to include OTP in the reset password request
    const response = await resetPassword(otp, password, confirmPassword);

    if (response.success) {
      setMessage(response.message);
      setTimeout(() => navigate("/login"), 3000); // Redirect to login after 3 sec
    } else {
      setError(response.message);
    }

    setLoading(false);
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const toggleConfirmPasswordVisibility = () => {
    setConfirmPasswordVisible(!confirmPasswordVisible);
  };

  return (
    <div className="pwd-reset-container">
      <div className="pwd-reset-card">
        <div className="pwd-reset-logo">
          <div className="pwd-logo-circle">🔐</div>
        </div>
        
        <div className="pwd-reset-header">
          <h2>Reset Password</h2>
          <p className="pwd-reset-subtitle">Enter the OTP sent to your email and create a new password</p>
        </div>
        
        <form onSubmit={handleSubmit} className="pwd-reset-form">
          {message && <div className="pwd-alert pwd-alert-success">{message}</div>}
          {error && <div className="pwd-alert pwd-alert-error">{error}</div>}
          
          <div className="pwd-form-group">
            <label htmlFor="otp">One-Time Password (OTP)</label>
            <div className="pwd-input-wrapper">
              <input
                id="otp"
                type="text"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                placeholder="Enter the 6-digit code"
                required
                className="pwd-reset-input pwd-otp-input"
                maxLength="6"
              />
            </div>
            <small className="pwd-form-hint">Enter the 6-digit code we sent to your email</small>
          </div>
          
          <div className="pwd-form-group">
            <label htmlFor="password">New Password</label>
            <div className="pwd-input-wrapper">
              <input
                id="password"
                type={passwordVisible ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your new password"
                required
                className="pwd-reset-input"
              />
              <button 
                type="button" 
                className="pwd-visibility-toggle" 
                onClick={togglePasswordVisibility}
                aria-label={passwordVisible ? "Hide password" : "Show password"}
              >
                {passwordVisible ? 
                  <i className="pwd-icon-eye-closed"></i> : 
                  <i className="pwd-icon-eye-open"></i>}
              </button>
            </div>
            <small className="pwd-form-hint">Password must be at least 8 characters</small>
          </div>
          
          <div className="pwd-form-group">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <div className="pwd-input-wrapper">
              <input
                id="confirmPassword"
                type={confirmPasswordVisible ? "text" : "password"}
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Confirm your new password"
                required
                className="pwd-reset-input"
              />
              <button 
                type="button" 
                className="pwd-visibility-toggle" 
                onClick={toggleConfirmPasswordVisibility}
                aria-label={confirmPasswordVisible ? "Hide password" : "Show password"}
              >
                {confirmPasswordVisible ? 
                  <i className="pwd-icon-eye-closed"></i> : 
                  <i className="pwd-icon-eye-open"></i>}
              </button>
            </div>
          </div>
          
          <button 
            type="submit" 
            className="pwd-button pwd-button-primary" 
            disabled={loading}
          >
            {loading ? (
              <>
                <span className="pwd-spinner"></span>
                <span>Resetting Password...</span>
              </>
            ) : (
              "Reset Password"
            )}
          </button>
          
          <div className="pwd-auth-links">
            <a href="/login" className="pwd-text-link">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M19 12H5M12 19l-7-7 7-7"/>
              </svg>
              Back to Login
            </a>
          </div>
        </form>

        {message && (
          <div className="pwd-redirect-notice">
            Redirecting to login page in a few seconds...
          </div>
        )}
      </div>
    </div>
  );
};

export default ResetPassword;