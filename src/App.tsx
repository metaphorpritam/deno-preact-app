import { TodoList } from "./components/TodoList.tsx";

// Main App component
export function App() {
  return (
    <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl">
        </div>
        <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
          <div className="max-w-md mx-auto">
            <div className="divide-y divide-gray-200">
              <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight text-center">
                  Preact To-Do List
                </h1>
                <p className="text-center text-gray-500">
                  Built with Preact, Deno, and Tailwind CSS
                </p>
              </div>
              <div className="pt-6 text-base leading-6 sm:text-lg sm:leading-7">
                <TodoList />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
