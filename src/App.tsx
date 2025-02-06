import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Feed from './pages/Feed';
import Network from './pages/Network';
import Jobs from './pages/Jobs';
import Courses from './pages/Courses';
import Profile from './pages/Profile';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <main className="container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<Feed />} />
            <Route path="/network" element={<Network />} />
            <Route path="/jobs" element={<Jobs />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;