import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import './Quality.css';

const Quality = () => {
  return (
    <div className="quality-page">
      <Navbar />
      
      {/* Hero Section */}
      <section className="quality-hero">
        <div className="quality-hero-background"></div>
        <div className="quality-hero-overlay"></div>
        
        <div className="quality-hero-content">
          <div className="quality-hero-text">
            <h1 className="quality-hero-title">
              Quality!
            </h1>
            <p className="quality-hero-description">
              Excellence in every detail. Our commitment to quality drives innovation, 
              ensures reliability, and delivers solutions that exceed expectations.
            </p>
          </div>        
        </div>      
        </section>

      {/* Exceeding Expectations Section */}
      <section className="exceeding-expectations-section">
        <div className="container">
          <div className="expectations-content">
            <div className="expectations-header">
              <h2 className="expectations-title">Exceeding Expectations</h2>
              <p className="expectations-subtitle">
                Eon's quality policy is articulated in support of the organization's Mission and Strategy.
              </p>
            </div>

            <div className="quality-statement">
              <div className="statement-quote">
                <span className="quote-mark">"</span>
                <h3 className="statement-text">
                  EON will endeavor to offer quality and cost-effective solutions speedily to exceed its customer's expectations.
                </h3>
                <span className="quote-mark">"</span>
              </div>
            </div>

            <div className="quality-description">
              <div className="description-grid">
                <div className="description-left">
                  <p>
                    At EON, Quality is not merely a function, but a vital mission and an integral part of the work culture. 
                    Quality-entrained processes are the cornerstones of Eon's development methodology. At EON, we are a 
                    systems driven, ISO 9001:2015 organization, currently working towards SEI CMM level 3.
                  </p>
                  <p>
                    The objective of the quality management system at EON is to ensure customer delight by making EON's 
                    solutions and services <strong>"better, faster and cheaper"</strong>. EON has adopted the path of continuous 
                    improvement to be a true partner in the success of its clients.
                  </p>
                </div>
                <div className="description-right">
                  <div className="quality-highlights">
                    <div className="highlight-item">
                      <div className="highlight-icon">🎯</div>
                      <div className="highlight-content">
                        <h4>Mission-Driven Quality</h4>
                        <p>Quality is not just a function but an integral part of our work culture</p>
                      </div>
                    </div>
                    <div className="highlight-item">
                      <div className="highlight-icon">📊</div>
                      <div className="highlight-content">
                        <h4>Systems Driven</h4>
                        <p>ISO 9001:2015 certified organization working towards SEI CMM level 3</p>
                      </div>
                    </div>
                    <div className="highlight-item">
                      <div className="highlight-icon">🔄</div>
                      <div className="highlight-content">
                        <h4>Continuous Improvement</h4>
                        <p>Component-based process architecture and tool-based engineering</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="quality-approach">
              <div className="approach-content">
                <h3>Our Quality Approach</h3>
                <p>
                  To this end, QMS promotes component-based process architecture, tool-based engineering and continuous 
                  process improvement mechanisms. Eon processes are housed on the intranet for ease of online access.
                </p>
                <p>
                  A powerful feedback option facilitates speedy interaction between the user and the performance excellence group. 
                  The processes are dynamic and are continually improved to suit the evolving needs of the user, the business 
                  and the changing paradigms of technology.
                </p>
              </div>
            </div>

            <div className="quality-philosophy">
              <div className="philosophy-card">
                <h3>Quality in Practice</h3>
                <p>
                  <strong>EON believes not just in theorizing about quality but also in practicing.</strong> Emphasis on high quality 
                  and excellence are the catalysts to increase market share, reduce cost and give EON an outstanding credibility.
                </p>
                <div className="philosophy-features">
                  <div className="feature-tag">Prevention Focus</div>
                  <div className="feature-tag">Appraisal Process</div>
                  <div className="feature-tag">Failure Analysis</div>
                  <div className="feature-tag">Do It Right First Time</div>
                </div>
              </div>
            </div>
          </div>
        </div>      </section>

      <Footer />
    </div>
  );
};

export default Quality;
