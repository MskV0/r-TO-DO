// components/ToDoList.jsx

import ToDoItem from './ToDoItem';

function ToDoList({ todos, onToggleComplete, onDeleteTodo, onEditTodo }) {
  if (todos.length === 0) {
    return <p className="empty-list">Your to-do list is empty! Add some tasks to get started.</p>;
  }

  return (
    <ul className="todo-list">
      {todos.map((todo) => (
        <ToDoItem
          key={todo.id}
          todo={todo}
          onToggleComplete={onToggleComplete}
          onDeleteTodo={onDeleteTodo}
          onEditTodo={onEditTodo}
        />
      ))}
    </ul>
  );
}

export default ToDoList;