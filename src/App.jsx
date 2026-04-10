import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import CoursesPage from './pages/CoursesPage';
import MyLearningPage from './pages/MyLearningPage';
import CommunityPage from './pages/CommunityPage';
import EnterprisePage from './pages/EnterprisePage';
import CourseDetailPage from './pages/CourseDetailPage';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        
        <Routes>
          {/* Home = Course Directory */}
          <Route path="/" element={<CoursesPage />} />
          
          {/* New Pages */}
          <Route path="/my-learning" element={<MyLearningPage />} />
          <Route path="/community" element={<CommunityPage />} />
          <Route path="/enterprise" element={<EnterprisePage />} />
          <Route path="/course/:id" element={<CourseDetailPage />} />
          
          {/* 404 Fallback */}
          <Route path="*" element={<h2 style={{textAlign:'center', padding:'4rem'}}>Page Not Found</h2>} />
        </Routes>
        
        <Footer />
      </div>
    </Router>
  );
}

export default App;