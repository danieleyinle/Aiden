import React, { useState, useEffect } from 'react';
import { Shield, AlertTriangle, MapPin, Users, TrendingUp, Bell } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import './Landing.css';

const Landing = () => {
  const navigate = useNavigate();
  const [typewriterText, setTypewriterText] = useState('');
  const [showContent, setShowContent] = useState(false);
  const fullText = "Know Before It Happens.";

  // Navigation functions
  const handleEnterDashboard = () => {
    navigate('/dashboard');
  };

  const handleLearnMore = () => {
    // Smooth scroll to problem section
    const problemSection = document.querySelector('.problem-section');
    if (problemSection) {
      problemSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleGetStarted = () => {
    navigate('/dashboard');
  };

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setTypewriterText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
        setTimeout(() => setShowContent(true), 300);
      }
    }, 80);

    return () => clearInterval(timer);
  }, []);

  // Mouse glow effect
  useEffect(() => {
    const handleMouseMove = (e) => {
      const buttons = document.querySelectorAll('.glow-button');
      buttons.forEach(button => {
        const rect = button.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        button.style.setProperty('--mouse-x', `${x}px`);
        button.style.setProperty('--mouse-y', `${y}px`);
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const features = [
    {
      icon: <AlertTriangle className="w-8 h-8" />,
      title: "Instant Threat Reporting",
      description: "Anonymous, fast reporting of security incidents with precise location context."
    },
    {
      icon: <MapPin className="w-8 h-8" />,
      title: "Dynamic Risk Landscape",
      description: "A living map that visually represents safety levels across regions in real-time."
    },
    {
      icon: <Bell className="w-8 h-8" />,
      title: "Proximity Alerts",
      description: "Immediate notifications when danger approaches your location."
    }
  ];

  return (
    <div className="landing-container">
      {/* Animated background gradient */}
      <div className="background-gradient">
        <div className="gradient-orb gradient-orb-1"></div>
        <div className="gradient-orb gradient-orb-2"></div>
      </div>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          {/* Logo/Title */}
          <div className="logo-container">
            <h1 className="logo-title">
              AIDEN
            </h1>
            <p className="logo-subtitle">
              AI-Driven Emergency Network
            </p>
          </div>

          {/* Typewriter Effect */}
          <div className="typewriter-container">
            <h2 className="typewriter-text">
              {typewriterText}
              <span className="typewriter-cursor"></span>
            </h2>
          </div>

          {/* CTA Buttons */}
          <div className={`cta-buttons ${showContent ? 'show' : ''}`}>
            <button className="glow-button btn-primary" onClick={handleEnterDashboard}>
              <div className="btn-glow"></div>
              <span className="btn-content">
                Enter Dashboard
                <Shield className="btn-icon" />
              </span>
            </button>
            
            <button className="glow-button btn-secondary" onClick={handleLearnMore}>
              <div className="btn-glow"></div>
              <span className="btn-content">
                Learn More
              </span>
            </button>
          </div>

          {/* Scroll Indicator */}
          <div className={`scroll-indicator ${showContent ? 'show' : ''}`}>
            <div className="scroll-bounce">
              <div className="scroll-wheel">
                <div className="scroll-dot"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="section problem-section">
        <div className="section-container">
          <div className="glass-card problem-card">
            <h2 className="section-title gradient-text">
              The Problem
            </h2>
            <div className="problem-content">
              <p>
                Nigeria's security crisis has become deeply personal. Across different regions, communities face recurring threats such as <span className="highlight">banditry, kidnappings, and targeted attacks</span>, leaving families and entire communities exposed.
              </p>
              <p>
                A major contributor is the <span className="highlight">absence of real-time, localized safety intelligence</span>. Most Nigerians rely on delayed news updates, word-of-mouth, or unverified social media posts, which usually surface after damage has already been done.
              </p>
              <p>
                There is <span className="highlight">no unified platform</span> that allows citizens to safely report threats, visualize emerging danger zones, or receive early alerts tailored to their location. Security responses remain largely reactive rather than preventive.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Solution */}
      <section className="section solution-section">
        <div className="section-container-wide">
          <h2 className="section-title gradient-text-alt text-center">
            Our Solution
          </h2>
          <p className="section-subtitle">
            A real-time community safety network that helps Nigerians detect, avoid, and respond to security threats before they turn deadly.
          </p>

          <div className="features-grid">
            {features.map((feature, index) => (
              <div
                key={index}
                className="feature-card glass-card"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="feature-icon">
                  {feature.icon}
                </div>
                <h3 className="feature-title">
                  {feature.title}
                </h3>
                <p className="feature-description">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="section how-it-works-section">
        <div className="section-container">
          <h2 className="section-title gradient-text text-center">
            How It Works
          </h2>

          <div className="steps-container">
            {[
              { step: "01", title: "Report", desc: "Community members anonymously report security incidents in real-time" },
              { step: "02", title: "Analyze", desc: "AIDEN verifies patterns and plots threats on a dynamic risk landscape" },
              { step: "03", title: "Alert", desc: "Users receive timely notifications and can make informed safety decisions" }
            ].map((item, index) => (
              <div
                key={index}
                className="step-item"
                style={{ animationDelay: `${index * 300}ms` }}
              >
                <div className="step-number">
                  {item.step}
                </div>
                <div className="step-content glass-card">
                  <h3 className="step-title">{item.title}</h3>
                  <p className="step-description">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section final-cta-section">
        <div className="final-cta-container">
          <div className="final-cta-card glass-card">
            <h2 className="final-cta-title">
              Awareness Saves Lives
            </h2>
            <p className="final-cta-description">
              Join thousands protecting their communities. Be the first line of defense.
            </p>
            <button className="glow-button btn-final-cta" onClick={handleGetStarted}>
              <div className="btn-glow"></div>
              <span className="btn-content">
                Get Started Now
                <Users className="btn-icon" />
              </span>
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <p className="footer-text">© 2025 NEXA. Building a safer Nigeria.</p>
          <p className="footer-subtext">SDG 16: Peace, Justice & Strong Institutions</p>
        </div>
      </footer>
    </div>
  );
};

export default Landing;