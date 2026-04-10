import React from 'react';
import './CommunityPage.css';

const CommunityPage = () => {
  const posts = [
    { id: 1, title: "How to deploy React app on Vercel in under 60 seconds?", author: "Priya Sharma", replies: 24, time: "2h ago" },
    { id: 2, title: "Best practices for state management in large React projects", author: "Rahul Verma", replies: 15, time: "5h ago" },
    { id: 3, title: "Anyone using Next.js 15 App Router with TypeScript?", author: "Anika Patel", replies: 8, time: "1d ago" },
  ];

  return (
    <main className="main-content">
      <div className="page-header">
        <h1>Community Hub</h1>
        <p>Connect • Learn • Grow with 12,458 fellow learners</p>
      </div>

      <div className="community-feed">
        {posts.map(post => (
          <div key={post.id} className="community-post">
            <div className="post-header">
              <span className="author">👤 {post.author}</span>
              <span className="time">{post.time}</span>
            </div>
            <h3>{post.title}</h3>
            <div className="post-footer">
              <span>💬 {post.replies} replies</span>
              <button className="join-btn">Join Discussion</button>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default CommunityPage;