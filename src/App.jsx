import React, { useState } from 'react';
import Header from './components/Header';
import ToDoList from './components/ToDoList';
import { Plus, RotateCcw, ChevronDown, Trash2, RefreshCw } from 'lucide-react';

const App = () => {
  const [todos, setTodos] = useState([
    { id: 1, text: "Learn React", completed: false },
    { id: 2, text: "Build a to-do app", completed: true },
    { id: 3, text: "Add styling", completed: false }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [showResetMenu, setShowResetMenu] = useState(false);

  // Add new todo
  const addTodo = () => {
    if (inputValue.trim() !== '') {
      const newTodo = {
        id: Date.now(),
        text: inputValue.trim(),
        completed: false
      };
      setTodos([...todos, newTodo]);
      setInputValue('');
    }
  };

  // Handle Enter key press
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      addTodo();
    }
  };

  // Toggle completion status
  const toggleComplete = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  // Delete todo
  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  // Edit todo
  const editTodo = (id, newText) => {
    if (newText.trim() !== '') {
      setTodos(todos.map(todo =>
        todo.id === id ? { ...todo, text: newText.trim() } : todo
      ));
    }
  };

  // Reset all todos (delete all)
  const resetTodos = () => {
    setTodos([]);
    setInputValue('');
    setShowResetMenu(false);
  };

  // Mark all as complete
  const markAllComplete = () => {
    setTodos(todos.map(todo => ({ ...todo, completed: true })));
    setShowResetMenu(true);
  };

  // Get statistics
  const totalTodos = todos.length;
  const completedTodos = todos.filter(todo => todo.completed).length;
  const pendingTodos = totalTodos - completedTodos;

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <Header />
        
        {/* Main Content */}
        <div className="bg-white rounded-b-lg shadow-lg p-6">
          {/* Add Todo Section */}
          <div className="mb-6">
            <div className="flex space-x-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="What needs to be done?"
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
              />
              <button
                onClick={addTodo}
                className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-200 transition-all flex items-center space-x-2"
              >
                <Plus size={20} />
                <span>Add</span>
              </button>
            </div>
          </div>

          {/* Statistics */}
          <div className="grid grid-cols-3 gap-4 mb-6">
            <div className="bg-blue-50 p-3 rounded-lg text-center">
              <div className="text-2xl font-bold text-blue-600">{totalTodos}</div>
              <div className="text-sm text-blue-600">Total</div>
            </div>
            <div className="bg-green-50 p-3 rounded-lg text-center">
              <div className="text-2xl font-bold text-green-600">{completedTodos}</div>
              <div className="text-sm text-green-600">Completed</div>
            </div>
            <div className="bg-orange-50 p-3 rounded-lg text-center">
              <div className="text-2xl font-bold text-orange-600">{pendingTodos}</div>
              <div className="text-sm text-orange-600">Pending</div>
            </div>
          </div>

          {/* Todo List */}
          <ToDoList
            todos={todos}
            onToggleComplete={toggleComplete}
            onDelete={deleteTodo}
            onEdit={editTodo}
          />

          {/* Reset Button with Dropdown */}
          {todos.length > 0 && (
            <div className="mt-6 text-center relative">
              <div className="inline-block">
                <button
                  onClick={() => setShowResetMenu(!showResetMenu)}
                  className="px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-200 transition-all flex items-center space-x-2"
                >
                  <RotateCcw size={20} />
                  <span>Reset Options</span>
                  <ChevronDown size={16} className={`transition-transform ${showResetMenu ? 'rotate-180' : ''}`} />
                </button>
                
                {/* Dropdown Menu */}
                {showResetMenu && (
                  <div className="absolute top-full mt-2 left-1/2 transform -translate-x-1/2 bg-white border border-gray-200 rounded-lg shadow-lg z-10 min-w-48">
                    <button
                      onClick={resetTodos}
                      className="w-full px-4 py-3 text-left hover:bg-red-50 transition-colors flex items-center space-x-3 border-b border-gray-100"
                    >
                      <Trash2 size={18} className="text-red-600" />
                      <div>
                        <div className="font-medium text-gray-900">Delete All Tasks</div>
                        <div className="text-sm text-gray-500">Remove all tasks permanently</div>
                      </div>
                    </button>
                    <button
                      onClick={markAllComplete}
                      className="w-full px-4 py-3 text-left hover:bg-blue-50 transition-colors flex items-center space-x-3"
                    >
                      <RefreshCw size={18} className="text-blue-600" />
                      <div>
                        <div className="font-medium text-gray-900">Mark All Complete</div>
                        <div className="text-sm text-gray-500">Mark all tasks as complete</div>
                      </div>
                    </button>
                  </div>
                )}
              </div>
              
              {/* Click outside to close menu */}
              {showResetMenu && (
                <div 
                  className="fixed inset-0 z-5" 
                  onClick={() => setShowResetMenu(false)}
                ></div>
              )}
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="text-center mt-6 text-gray-600">
          <p>Built with React ⚛️</p>
        </div>
      </div>
    </div>
  );
};

export default App;
