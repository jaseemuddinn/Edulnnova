import React, { useState } from 'react';
import './Landing.css';
import logo from "../../assets/download.png";
import AIquestions from '../AIQUESTIONS/AIquestions';

const Landing = () => {
  const [showAIquestions, setShowAIquestions] = useState(false); // State to manage AIquestions visibility

  const handleFeatureClick = () => {
    setShowAIquestions(true); // Show AIquestions and hide landing
  };

  const handleBackToHome = () => {
    setShowAIquestions(false); // Show landing page and hide AIquestions
  };

  return (
    <>
      {!showAIquestions && ( // Conditionally render Landing only if AIquestions is not shown
        <div className="container">
          <header className="header">
            <div className="logo">
              <img src={logo} alt="" h/> 
            </div>
            <nav>
              <ul>
                <li>
                  <a href="#">Products <i className='fas fa-caret-down'></i></a>
                  <div className="dropdown_menu">
                    <ul>
                      <li><a href="#" onClick={handleFeatureClick}>AI-Generated Questions</a></li> {/* Click triggers AIquestions */}
                      <li><a href="">Autograding System</a></li>
                      <li><a href="">AI-Conducted Oral Questioning</a></li>
                    </ul>
                  </div>
                </li>
                <li>
                  <a href="#">Pricing</a>
                </li>
                <li>
                  <a href="#">Resources</a>
                </li>
              </ul>
            </nav>
            <div className="actions">
              <button className="try-demo-button">Try Demo</button>
              <button className="get-started-button">Get Started</button>
            </div>
          </header>

          <main className="main">
            <div className="hero">
              <h1>BUILD THE <span>FUTURE</span> WITH <span>AI</span></h1>
              <p>Enhance your learning experience with AI-powered personalized education.</p>
            </div>
            <div className="features">
              <div className="feature">
                <h2>AI-Generated Questions</h2>
                <p>Receive tailored questions based on your learning progress and needs.</p>
                <button className="learn-more-button" onClick={handleFeatureClick}>Learn More</button>
              </div>
              <div className="feature">
                <h2>Autograding System</h2>
                <p>Get instant feedback and grades on your answers with our automated system.</p>
                <button className="learn-more-button">Learn More</button>
              </div>
              <div className="feature">
                <h2>AI-Conducted Oral Questioning</h2>
                <p>Engage in interactive oral exams powered by AI to test your knowledge effectively.</p>
                <button className="learn-more-button">Learn More</button>
              </div>
            </div>
          </main>

          <footer className="footer">
            <p>&copy; 2024 Edulnnova. All rights reserved.</p>
          </footer>
        </div>
      )}

      {showAIquestions && <AIquestions onBackToHome={handleBackToHome} />} {/* Pass the function as a prop */}
    </>
  );
};

export default Landing;


