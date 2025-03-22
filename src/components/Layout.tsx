import { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 font-sans relative overflow-hidden">
      {/* Animated background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-indigo-500/20 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-500/20 rounded-full translate-x-1/2 translate-y-1/2 blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 w-[500px] h-[500px] bg-blue-500/20 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl animate-pulse delay-500" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-transparent via-gray-950/50 to-gray-950" />
      </div>

      {/* Main content container */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-gray-900/30 backdrop-blur-xl rounded-3xl shadow-2xl overflow-hidden border border-gray-800/50">
          <div className="relative">
            {/* Subtle gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-purple-500/10" />
            
            {/* Content wrapper with smooth transitions */}
            <div className="relative transition-all duration-300 ease-in-out">
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout; 