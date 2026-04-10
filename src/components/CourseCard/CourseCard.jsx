import React from 'react';
import { Link } from 'react-router-dom';
import './CourseCard.css';

const CourseCard = ({ course }) => {
  const renderStars = (rating) => {
    return '★★★★☆'.split('').map((star, i) => (
      <span key={i} className={i < Math.floor(rating) ? 'star filled' : 'star'}>
        ★
      </span>
    ));
  };

  return (
    <div className="course-card">
      <img src={course.image} alt={course.name} className="course-image" />
      
      <div className="card-body">
        <div className="category-badge">{course.category}</div>
        <h3 className="course-title">{course.name}</h3>
        
        <div className="instructor">
          <span className="label">Instructor:</span> {course.instructor}
        </div>
        
        <div className="meta">
          <div className="duration">⏳ {course.duration}</div>
          <div className="rating">
            {renderStars(course.rating)}
            <span className="rating-number">{course.rating}</span>
          </div>
        </div>
        
        <p className="description">{course.description}</p>
        
        {/* ENROLL BUTTON NOW NAVIGATES TO DETAIL / ENROLL PAGE */}
        <Link to={`/course/${course.id}`} className="enroll-btn">
          Enroll Now – Free Preview
        </Link>
      </div>
    </div>
  );
};

export default CourseCard;