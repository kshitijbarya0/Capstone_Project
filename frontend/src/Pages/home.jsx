import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import '../styles/LandingPage.css'; // We'll create this CSS file next

const LandingPage = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  // Load saved theme from localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setDarkMode(true);
    }
  }, []);

  // Handle theme toggle
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
    // Save theme preference
    localStorage.setItem('theme', darkMode ? 'dark' : 'light');
  }, [darkMode]);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      const links = document.querySelector('.links');
      const hamburger = document.querySelector('.hamburger');
      
      if (links && hamburger && !links.contains(event.target) && 
          !hamburger.contains(event.target) && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [mobileMenuOpen]);

  const toggleMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleNavLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <div className="container">
      {/* Navbar */}
      <nav className="nav">
        <div className="logo">Learn<span className="logo-highlight">Pro</span></div>
        <div className={`hamburger ${mobileMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className={`links ${mobileMenuOpen ? 'active' : ''}`}>
          <a href="#home" className="link" onClick={handleNavLinkClick}>Home</a>
          <a href="#services" className="link" onClick={handleNavLinkClick}>Services</a>
          <a href="#about" className="link" onClick={handleNavLinkClick}>About</a>
          <a href="#contact" className="link" onClick={handleNavLinkClick}>Contact</a>
          <div className="theme-toggle" onClick={() => setDarkMode(!darkMode)}>
            <div className="toggle-circle"></div>
            <span className="toggle-icon">{darkMode ? '🌙' : '☀️'}</span>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero" id="home">
        <h1 className="title">Accelerate Your Learning & Career</h1>
        <p className="subtitle">
          Comprehensive resources to help you excel academically and professionally.
          Get access to expertly curated materials designed for student success.
        </p>
        <button 
          className="btn btn-primary btn-medium" 
          onClick={() => navigate("/register")}
        >
          Get Started Free
        </button>
      </section>

      {/* Services Section */}
      <section className="services" id="services">
        <h2 className="heading">Our Learning Pathways</h2>
        <div className="grid">
          {[
            {
              id: 1,
              title: "Placement Roadmap",
              description: "Structured guidance from basics to advanced topics, with interview preparation resources tailored for top tech companies.",
              className: "card-blue"
            },
            {
              id: 2,
              title: "College Notes",
              description: "Comprehensive, well-organized notes covering all major subjects with clear explanations and key concepts highlighted.",
              className: "card-pink"
            },
            {
              id: 3,
              title: "MCQ Practice",
              description: "Thousands of practice questions with detailed solutions to strengthen your understanding and test-taking abilities.",
              className: "card-green"
            }
          ].map(service => (
            <div key={service.id} className={`card ${service.className}`}>
              <h3 className="card-title">{service.title}</h3>
              <p>{service.description}</p>
              <button 
                className="btn btn-light"
                onClick={() => navigate("/register")}
              >
                Explore
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta">
        <h2 className="cta-title">Ready to Transform Your Learning Experience?</h2>
        <p className="cta-text">
          Join thousands of students who have accelerated their career and academic journey with us.
        </p>
        <button 
          className="btn btn-light-purple btn-medium"
          onClick={() => navigate("/register")}
        >
          Start Learning Now
        </button>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-logo">
            <div className="logo">Learn<span className="logo-highlight">Pro</span></div>
            <p>Accelerate your learning journey</p>
          </div>
          <div className="footer-links">
            <div className="footer-column">
              <h4>Services</h4>
              <a href="#">Placement Roadmap</a>
              <a href="#">College Notes</a>
              <a href="#">MCQ Practice</a>
            </div>
            <div className="footer-column">
              <h4>Company</h4>
              <a href="#">About Us</a>
              <a href="#">Careers</a>
              <a href="#">Contact</a>
            </div>
            <div className="footer-column">
              <h4>Legal</h4>
              <a href="#">Terms of Service</a>
              <a href="#">Privacy Policy</a>
            </div>
          </div>
        </div>
        <div className="copyright">
          <p>&copy; 2025 LearnPro. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;