import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Personalinfo from './csb/components/Personalinfo';
import Skills from './csb/components/Skills';
import Projects from './csb/components/Projects';

// function Home() {
//   return (
//     <div>
//       <h1>🐳 Docker React App</h1>
//       <p>Welcome to your Dockerized React application!</p>
//       <p>This app is running in a Docker container with hot reload enabled.</p>
//     </div>
//   );
// }

// function About() {
//   return (
//     <div>
//       <h1>About</h1>
//       <p>This is a sample React app containerized with Docker.</p>
//       <p>Features:</p>
//       <ul>
//         <li>React 18</li>
//         <li>React Router</li>
//         <li>Hot reload in development</li>
//         <li>Production-ready builds</li>
//       </ul>
//     </div>
//   );
// }

function App() {
  return (
    <Router>
      <div className="App">
        <nav className="navbar">
          <Link to="/" className="nav-link">Personal</Link>
          <Link to="/skills" className="nav-link">Skills</Link>
          <Link to="/projects" className="nav-link">Projects</Link>
        </nav>
        
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Personalinfo />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
