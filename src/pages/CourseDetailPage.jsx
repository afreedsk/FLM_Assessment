import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { coursesData } from '../data/courses';
import './CourseDetailPage.css';

const CourseDetailPage = () => {
  const { id } = useParams();
  const course = coursesData.find(c => c.id === parseInt(id));

  if (!course) {
    return <h2>Course not found</h2>;
  }

  const handleEnroll = (e) => {
    e.preventDefault();
    alert(`🎉 Successfully enrolled in "${course.name}"!\n\nWelcome to the course, Shaik Afreed!`);
  };

  return (
    <main className="main-content detail-page">
      <Link to="/" className="back-btn">← Back to Courses</Link>
      
      <div className="detail-grid">
        <div className="detail-left">
          <img src={course.image} alt={course.name} className="detail-image" />
          <div className="detail-meta">
            <span className="category-badge big">{course.category}</span>
            <div className="rating-big">★ {course.rating} • {course.duration}</div>
          </div>
          <h1 className="detail-title">{course.name}</h1>
          <p className="detail-instructor">Instructor: <strong>{course.instructor}</strong></p>
          <p className="detail-description">{course.description}</p>

          <h3>Syllabus</h3>
          <ul className="syllabus">
            <li>Week 1 – Introduction &amp; Setup</li>
            <li>Week 2 – Core Concepts</li>
            <li>Week 3 – Advanced Techniques</li>
            <li>Week 4 – Real-World Projects</li>
            <li>Week 5 – Deployment &amp; Best Practices</li>
          </ul>
        </div>

        <div className="detail-right">
          <div className="enroll-box">
            <h3>Enroll Today</h3>
            <p className="price">Free Preview • Full access ₹4,999</p>
            
            <form onSubmit={handleEnroll}>
              <input type="text" placeholder="Full Name" defaultValue="Shaik Afreed" readOnly />
              <input type="email" placeholder="Email" defaultValue="shaik.afreed@example.com" readOnly />
              <button type="submit" className="enroll-now-btn">Enroll Now – Start Learning Instantly</button>
            </form>
            
            <div className="guarantee">30-day money-back guarantee • Lifetime access</div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default CourseDetailPage;