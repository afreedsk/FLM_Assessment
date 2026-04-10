import React from 'react';
import './EnterprisePage.css';

const EnterprisePage = () => {
  return (
    <main className="main-content">
      <div className="hero enterprise-hero">
        <h1>Enterprise Learning Solutions</h1>
        <p>Empower your entire team with industry-leading courses, certifications, and analytics.</p>
        <button className="btn-primary large">Request a Demo</button>
      </div>

      <div className="enterprise-grid">
        <div className="benefit-card">
          <h3>Custom Learning Paths</h3>
          <p>Tailored curriculum for your company’s exact skill needs.</p>
        </div>
        <div className="benefit-card">
          <h3>Progress Analytics</h3>
          <p>Real-time dashboards for team performance and ROI.</p>
        </div>
        <div className="benefit-card">
          <h3>SSO &amp; LMS Integration</h3>
          <p>Seamless integration with your existing HR systems.</p>
        </div>
      </div>

      <div className="demo-form-section">
        <h2>Ready to transform your workforce?</h2>
        <form className="demo-form" onSubmit={(e) => { e.preventDefault(); alert('Demo request submitted! (Mock)'); }}>
          <input type="text" placeholder="Company Name" required />
          <input type="email" placeholder="Work Email" required />
          <button type="submit" className="btn-primary">Get Enterprise Pricing</button>
        </form>
      </div>
    </main>
  );
};

export default EnterprisePage;