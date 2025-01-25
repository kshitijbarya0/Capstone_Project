import React from "react";
import { useNavigate } from "react-router-dom";
const LandingPage = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate("/register");
  };

  return (
    <div>
      {/* Navbar */}
      <nav>
        <div className="logo">LearnPro</div>
        <div className="nav-links">
          <a href="#features">Features</a>
          <a href="#pricing">Pricing</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Transform Your Learning Journey</h1>
          <p className="subtitle">
            Unlock your potential with smart, accessible learning resources tailored to your needs.
          </p>
          <div className="email-form">
              <button onClick={handleGetStarted}>Get Started</button>
          </div>
        </div>
        <div className="hero-image">
          <div className="graduation-icon">
            <svg fill="#007bff" viewBox="0 0 24 24">
              <path d="M12 3L1 9l11 6l9-4.91V17h2V9L12 3zM5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82z" />
            </svg>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features" id="features">
        <h2>Your Learning, Reimagined</h2>
        <div className="feature-grid">
          <div className="feature-card">
            <div className="feature-icon">⬇️</div>
            <h3 className="feature-title">Downloadable Notes</h3>
            <p className="feature-description">
              Access comprehensive PDF notes for offline learning anytime, anywhere.
            </p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">✅</div>
            <h3 className="feature-title">MCQ Practice</h3>
            <p className="feature-description">
              Sharpen your skills with interactive multiple-choice question sets.
            </p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">📚</div>
            <h3 className="feature-title">Comprehensive Content</h3>
            <p className="feature-description">
              Expertly curated learning materials across multiple disciplines.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="cta">
        <h2>Your Success Starts Here</h2>
        <p>
          Every great journey begins with a single step. Let LearnPro be your companion in turning your educational dreams into reality.
        </p>
          <button onClick={handleGetStarted}>Start Your Learning Journey</button>
      </section>
    </div>
  );
};

export default LandingPage;
