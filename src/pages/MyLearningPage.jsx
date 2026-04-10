import React from 'react';
import './MyLearningPage.css';
import { coursesData } from '../data/courses';

const MyLearningPage = () => {
  // Mock enrolled courses with progress
  const enrolledCourses = coursesData.slice(0, 4).map(course => ({
    ...course,
    progress: Math.floor(Math.random() * 40) + 60, // 60% - 99%
  }));

  return (
    <main className="main-content my-learning-page">
      <div className="page-header">
        <h1>My Learning</h1>
        <p>Continue where you left off • Track your progress</p>
      </div>

      <div className="enrolled-grid">
        {enrolledCourses.map(course => (
          <div key={course.id} className="enrolled-card">
            {/* Image on TOP */}
            <img 
              src={course.image} 
              alt={course.name} 
              className="enrolled-image"
            />

            <div className="enrolled-body">
              {/* Category Badge */}
              <div className="category-badge">{course.category}</div>

              {/* Course Title */}
              <h3 className="course-title">{course.name}</h3>

              {/* Instructor */}
              <p className="instructor">by {course.instructor}</p>

              {/* Duration + Rating */}
              <div className="meta-info">
                <div className="duration">
                  ⏳ {course.duration}
                </div>
                <div className="rating">
                  ★ <span>{course.rating}</span>
                </div>
              </div>

              {/* Progress */}
              <div className="progress-container">
                <div className="progress-bar">
                  <div 
                    className="progress-fill" 
                    style={{ width: `${course.progress}%` }}
                  ></div>
                </div>
                <span className="progress-text">
                  {course.progress}% Complete
                </span>
              </div>

              {/* Continue Button */}
              <button className="continue-btn">
                Continue Learning →
              </button>
            </div>
          </div>
        ))}
      </div>

      {enrolledCourses.length === 0 && (
        <p className="no-courses">No courses enrolled yet. Start learning today!</p>
      )}
    </main>
  );
};

export default MyLearningPage;