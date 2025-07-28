import React, { useEffect } from 'react';
import './App.css';

const App = () => {
  useEffect(() => {
    const sections = document.querySelectorAll('section');
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, {
      threshold: 0.2
    });

    sections.forEach(section => {
      observer.observe(section);
    });

    
  }, []);

  return (
    <div className="App">
      <header className="header">
        <img src="/profile.jpg" alt="Haider Ali" className="profile-pic" />
        <h1>Haider Ali</h1>
        <p>Frontend Developer | Creative Problem Solver</p>
      </header>

      <section id="skills">
        <h2>Skills</h2>
        <div className="skills">
          {["HTML", "CSS", "JavaScript", "React", "MySQL", "Tailwind CSS"].map(skill => (
            <div className="card" key={skill}>{skill}</div>
          ))}
        </div>
      </section>

      <section id="projects">
        <h2>Projects</h2>
        <div className="projects">
          {[
            {
              title: "Coza Store",
              desc: "E-commerce site with modern UI, responsive layout, and shopping cart."
            },
            {
              title: "MiniGram",
              desc: "Instagram-style app with login, feed, and post sharing features."
            },
            {
              title: "Online Voting System",
              desc: "Java-based secure voting system with admin controls and real-time results."
            }
          ].map(project => (
            <div className="card" key={project.title}>
              <h3>{project.title}</h3>
              <p>{project.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="experience">
        <h2>Experience</h2>
        <div className="card">
          <p>
            As a passionate CS student, I've worked on multiple frontend-focused academic and personal projects. My experience includes building responsive user interfaces, collaborating in small teams using Agile practices, and integrating real-time features with JavaScript frameworks.
          </p>
        </div>
      
        <div className="card">
          <p>
            Participated in various hackathons and coding challenges to improve my real-world problem-solving skills.
            I’ve practiced version control with Git and GitHub, contributed to open-source-like projects at university, and frequently used online platforms like LeetCode and Frontend Mentor to improve my technical and design skills.
          </p>
        </div>
        <div className="card">
          <p>
            Worked on mock client projects where I translated user requirements into responsive web interfaces using HTML, CSS, JavaScript, and React.
          </p>
        </div>
      </section>

      <section id="contact">
        <h2>Contact</h2>
        <div className="card">
          <p>Email: haideralimrhx584@gmail.com</p>
          <p>Phone: 0327-4076101</p>
          <p>Location: Lahore, Pakistan</p>
          <p><a href="https://linkedin.com/in/haider-ali-b15831372" target="_blank" rel="noopener noreferrer">LinkedIn Profile</a></p>
        </div>
      </section>

      <footer>
        <p>&copy; 2025 Haider Ali All Right Reserved.</p>
      </footer>
    </div>
  );
};

export default App;