import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from './Layout';

const Projects = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    // Reset authentication state when component mounts
    setIsAuthenticated(false);
    console.log('Projects component mounted');
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === 'password123') {
      setIsAuthenticated(true);
      setError('');
    } else {
      setError('Incorrect password');
    }
  };

  if (isAuthenticated) {
    return (
      <Layout>
        <div className="p-12">
          <div className="relative">
            <h2 className="text-5xl font-bold text-white mb-8 bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400 animate-gradient">
              My Projects
            </h2>
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 blur-3xl -z-10 animate-pulse" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project cards */}
            <div className="group bg-gray-800/30 rounded-2xl p-8 backdrop-blur-sm border border-gray-700/50 hover:border-indigo-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/10 hover:scale-105">
              <h3 className="text-2xl font-semibold text-white mb-4">Project 1</h3>
              <p className="text-gray-300">Description of project 1</p>
            </div>
            <div className="group bg-gray-800/30 rounded-2xl p-8 backdrop-blur-sm border border-gray-700/50 hover:border-indigo-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/10 hover:scale-105">
              <h3 className="text-2xl font-semibold text-white mb-4">Project 2</h3>
              <p className="text-gray-300">Description of project 2</p>
            </div>
            <div className="group bg-gray-800/30 rounded-2xl p-8 backdrop-blur-sm border border-gray-700/50 hover:border-indigo-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/10 hover:scale-105">
              <h3 className="text-2xl font-semibold text-white mb-4">Project 3</h3>
              <p className="text-gray-300">Description of project 3</p>
            </div>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="flex flex-col items-center justify-center min-h-[90vh] p-8">
        <div className="text-center space-y-8 max-w-md">
          <div className="relative">
            <h2 className="text-5xl font-bold text-white bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400 animate-gradient">
              Private Projects
            </h2>
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 blur-3xl -z-10 animate-pulse" />
          </div>
          <p className="text-gray-300 text-lg">
            This section contains my private projects. Please enter the password to continue.
          </p>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="relative">
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-6 py-4 bg-gray-800/30 border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300"
                placeholder="Enter password"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 rounded-xl -z-10" />
            </div>
            {error && (
              <p className="text-red-400 text-sm bg-red-400/10 py-2 px-4 rounded-lg">
                {error}
              </p>
            )}
            <button
              type="submit"
              className="group relative w-full px-8 py-4 text-lg font-medium text-white bg-indigo-600 rounded-xl hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-indigo-500/25 overflow-hidden"
            >
              <span className="relative z-10">Access Projects</span>
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default Projects; 