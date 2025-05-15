import Todo from "./components/Todo";

function App() {
  return (
    <div className="bg-stone-900 min-h-screen">
      {/* Navigation Bar */}
      <nav className="bg-stone-800 text-white py-4 px-6 flex justify-between items-center">
        <h1 className="text-xl font-bold">Task-Track</h1>
        <a
          href="https://github.com/dev-aditya-lab/TaskTrack"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-gray-400"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6"
          >
            <path
              fillRule="evenodd"
              d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.154-1.11-1.461-1.11-1.461-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.983 1.03-2.682-.103-.253-.447-1.27.098-2.647 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.91-1.296 2.75-1.026 2.75-1.026.546 1.377.202 2.394.1 2.647.64.7 1.03 1.591 1.03 2.682 0 3.842-2.337 4.687-4.565 4.936.36.31.682.92.682 1.852 0 1.337-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.162 22 16.418 22 12c0-5.523-4.477-10-10-10z"
              clipRule="evenodd"
            />
          </svg>
        </a>
      </nav>

      {/* Main Content */}
      <div className="grid py-4">
        <Todo />
      </div>
    </div>
  );
}

export default App;
