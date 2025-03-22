import { Link } from 'react-router-dom';
import Layout from './Layout';

const Hero = () => {
  return (
    <Layout>
      <div className="flex flex-col items-center justify-center min-h-[90vh] p-8">
        <div className="text-center space-y-12">
          <div className="relative">
            <h1 className="text-8xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-400 to-blue-400 animate-gradient">
              OT
            </h1>
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/30 via-purple-500/30 to-blue-500/30 blur-3xl -z-10 animate-pulse" />
            <div className="absolute -inset-4 bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-blue-500/10 rounded-full blur-2xl -z-20 animate-pulse delay-500" />
          </div>
          <Link
            to="/projects"
            className="group relative inline-flex items-center px-8 py-4 text-lg font-medium text-white bg-indigo-600 rounded-xl hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-indigo-500/25 overflow-hidden"
          >
            <span className="relative z-10">View Projects</span>
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default Hero; 