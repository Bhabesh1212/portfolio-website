import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // Check dark mode from localStorage
      const isDarkMode = JSON.parse(localStorage.getItem('darkMode') || 'false');
      
      return (
        <div 
          className={`flex flex-col items-center justify-center min-h-screen p-6 transition-colors ${
            isDarkMode ? "bg-slate-900" : "bg-gray-100"
          }`}
          role="alert"
          aria-live="assertive"
        >
          <div className={`rounded-lg shadow-lg p-8 max-w-md text-center ${
            isDarkMode 
              ? "bg-slate-800 text-white" 
              : "bg-white text-gray-900"
          }`}>
            <h1 className="text-3xl font-bold text-red-600 mb-4">Oops!</h1>
            <p className={`mb-4 ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}>
              Something went wrong while rendering this page.
            </p>
            <p className={`text-sm mb-6 break-all ${isDarkMode ? "text-gray-400" : "text-gray-500"}`}>
              Error: {this.state.error?.message || 'Unknown error'}
            </p>
            <button
              onClick={() => window.location.href = '/'}
              className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 transition"
              aria-label="Return to home page"
            >
              Go Back Home
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
