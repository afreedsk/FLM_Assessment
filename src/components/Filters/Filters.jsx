import React from 'react';
import './Filters.css';

const Filters = ({
  searchTerm, setSearchTerm,
  selectedCategory, setSelectedCategory,
  selectedInstructor, setSelectedInstructor,
  sortBy, setSortBy,
  categories,
  instructors
}) => {
  return (
    <div className="filters-container">
      <div className="search-box">
        <input
          type="text"
          placeholder="Search courses or instructors..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="filter-group">
        <label>Category</label>
        <select value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)}>
          <option value="All">All Categories</option>
          {categories.map(cat => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>
      </div>

      <div className="filter-group">
        <label>Instructor</label>
        <select value={selectedInstructor} onChange={(e) => setSelectedInstructor(e.target.value)}>
          <option value="All">All Instructors</option>
          {instructors.map(inst => (
            <option key={inst} value={inst}>{inst}</option>
          ))}
        </select>
      </div>

      <div className="filter-group">
        <label>Sort By</label>
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="rating-desc">Highest Rated</option>
          <option value="name-asc">Course Name A-Z</option>
          <option value="name-desc">Course Name Z-A</option>
          <option value="duration-asc">Shortest Duration</option>
        </select>
      </div>

      <button className="reset-btn" onClick={() => {
        setSearchTerm('');
        setSelectedCategory('All');
        setSelectedInstructor('All');
        setSortBy('rating-desc');
      }}>
        Reset Filters
      </button>
    </div>
  );
};

export default Filters;