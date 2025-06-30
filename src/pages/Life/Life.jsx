import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import './Life.css';

const Life = () => {
  return (
    <div className="life-page">
      <Navbar />
      
      {/* Hero Section */}
      <section className="life-hero">
        <div className="life-hero-background"></div>
        <div className="life-hero-overlay"></div>
        
        <div className="life-hero-content">
          <div className="life-hero-text">
            <h1 className="life-hero-title">
              Life at Eon
            </h1>
          </div>        
          </div>
      </section>

      {/* Company Culture Section */}
      <section className="company-culture-section">
        <div className="container">
          <div className="culture-content">
            <div className="culture-left">
              <div className="culture-card-main">
                <div className="eon-logo-section">
                  <div className="eon-logo">
                    <div className="logo-circle">
                      <img src="/eon_logo_trans_white.png" alt="Eon Logo" className="logo-img" />
                    </div>
                  </div>
                  <h2 className="culture-title">Let's Get Started!</h2>
                  <button className="contact-btn">Contact Us</button>
                </div>
                
                <div className="culture-features">
                  <div className="feature-item">
                    <span className="feature-icon">+</span>
                    <span className="feature-text">Human Resource Practices</span>
                  </div>
                  <div className="feature-item">
                    <span className="feature-icon">+</span>
                    <span className="feature-text">Skills Up-Gradation Policy</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="culture-right">
              <div className="culture-text-content">
                <p className="culture-paragraph">
                  At EON, what is appreciated most is the enthusiasm to be creative and shoulder 
                  responsibility, and the drive and hard work put in by its partners has made EON a 
                  credible, respected and competitive player in its domain.
                </p>
                
                <p className="culture-paragraph">
                  There are no employees at EON. Only partners, who are a part of the organization. A 
                  flattened organizational hierarchy ensures that the energy of over 75 partners is optimally 
                  channelised. The energy of the partners is kindled by the motivational leadership 
                  objective of E3 - Empowerment, Enrichment and Engagement. This objective is well 
                  implemented by dynamic human resources programs, practices and management 
                  initiatives.
                </p>
                
                <p className="culture-paragraph">
                  People need to enjoy themselves to be able to realize their full potential at work; they 
                  need to have fun at work. And at EON we do just that. We have a great work environment 
                  that includes facilities such as a café, games room and other recreation facilities so 
                  necessary to unwind. At EON we believe in our age old policy, VASUDEV KUTUMBKAM, 
                  "the world is our family" and celebrate festivals like Diwali, Holi, Christmas and special 
                  days like EON day with great energy which has kindled a familial spirit in the 
                  organizations.
                </p>
                
                <p className="culture-paragraph">
                  The partners spread across the country have access to a common platform where they 
                  can share their resources and expertise with each other – an enterprise wide knowledge 
                  sharing and communication system to manage Eon's intellectual assets.
                </p>
                
                <p className="culture-paragraph">
                  From policies and procedures to ideas and suggestions, this open forum exists for 
                  intellectual exchange. Articles, weekly columns, presentations and research data etc. 
                  Partners can also refer information on the company's background and history, its 
                  structure, hierarchy, vision, policies, core activities, special initiatives and rewards, 
                  customer feedback and industry updates. This opportunity for exchange of ideas and for 
                  ready access to organization related information facilitates a sense of identification with                  
                  the organization's mission and its growth.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Life;
