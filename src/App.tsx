import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Hero from './components/Hero';
import Projects from './components/Projects';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
