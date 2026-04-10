import React from 'react';
import CourseCard from '../CourseCard/CourseCard';
import './CourseList.css';

const CourseList = ({ courses, loading, error, totalCourses, currentPage, totalPages, onPageChange }) => {
  if (loading) {
    return (
      <div className="loading-state">
        <div className="spinner"></div>
        <p>Loading premium courses...</p>
      </div>
    );
  }

  if (error) {
    return <div className="error-state">{error}</div>;
  }

  return (
    <div>
      <div className="results-header">
        <p className="results-count">
          Showing <strong>{courses.length}</strong> of {totalCourses} courses
        </p>
      </div>

      <div className="course-grid">
        {courses.map(course => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="pagination">
          <button 
            className="page-btn"
            disabled={currentPage === 1}
            onClick={() => onPageChange(currentPage - 1)}
          >
            ← Previous
          </button>
          
          {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
            <button
              key={page}
              className={`page-number ${currentPage === page ? 'active' : ''}`}
              onClick={() => onPageChange(page)}
            >
              {page}
            </button>
          ))}
          
          <button 
            className="page-btn"
            disabled={currentPage === totalPages}
            onClick={() => onPageChange(currentPage + 1)}
          >
            Next →
          </button>
        </div>
      )}
    </div>
  );
};

export default CourseList;