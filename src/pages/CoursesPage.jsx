import React, { useState, useEffect } from 'react';
import Filters from '../components/Filters/Filters';
import CourseList from '../components/CourseList/CourseList';
import { coursesData } from '../data/courses';
import '../App.css'; // Reuse hero styles

function CoursesPage() {
  const [courses, setCourses] = useState([]);
  const [filteredCourses, setFilteredCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedInstructor, setSelectedInstructor] = useState('All');
  const [sortBy, setSortBy] = useState('rating-desc');

  const [currentPage, setCurrentPage] = useState(1);
  const coursesPerPage = 6;

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setCourses(coursesData);
      setFilteredCourses(coursesData);
      setLoading(false);
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    let result = [...courses];

    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      result = result.filter(course =>
        course.name.toLowerCase().includes(term) ||
        course.instructor.toLowerCase().includes(term)
      );
    }

    if (selectedCategory !== 'All') {
      result = result.filter(course => course.category === selectedCategory);
    }

    if (selectedInstructor !== 'All') {
      result = result.filter(course => course.instructor === selectedInstructor);
    }

    if (sortBy === 'name-asc') result.sort((a, b) => a.name.localeCompare(b.name));
    else if (sortBy === 'name-desc') result.sort((a, b) => b.name.localeCompare(a.name));
    else if (sortBy === 'rating-desc') result.sort((a, b) => b.rating - a.rating);
    else if (sortBy === 'duration-asc') {
      const getWeeks = (dur) => parseInt(dur);
      result.sort((a, b) => getWeeks(a.duration) - getWeeks(b.duration));
    }

    setFilteredCourses(result);
    setCurrentPage(1);
  }, [courses, searchTerm, selectedCategory, selectedInstructor, sortBy]);

  const indexOfLastCourse = currentPage * coursesPerPage;
  const indexOfFirstCourse = indexOfLastCourse - coursesPerPage;
  const currentCourses = filteredCourses.slice(indexOfFirstCourse, indexOfLastCourse);
  const totalPages = Math.ceil(filteredCourses.length / coursesPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <main className="main-content">
      <div className="hero">
        <h1>Discover World-Class Courses</h1>
        <p className="subtitle">Learn from industry experts. Build your future today.</p>
      </div>

      <Filters
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        selectedInstructor={selectedInstructor}
        setSelectedInstructor={setSelectedInstructor}
        sortBy={sortBy}
        setSortBy={setSortBy}
        categories={[...new Set(courses.map(c => c.category))]}
        instructors={[...new Set(courses.map(c => c.instructor))]}
      />

      <CourseList
        courses={currentCourses}
        loading={loading}
        error={error}
        totalCourses={filteredCourses.length}
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </main>
  );
}

export default CoursesPage;