// components/ToDoItem.jsx

import { useState } from 'react';

function ToDoItem({ todo, onToggleComplete, onDeleteTodo, onEditTodo }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);

  const handleEditStart = () => {
    setIsEditing(true);
    setEditText(todo.text);
  };

  const handleEditSubmit = (e) => {
    e.preventDefault();
    if (editText.trim() === '') return;
    
    onEditTodo(todo.id, editText);
    setIsEditing(false);
  };

  const handleEditChange = (e) => {
    setEditText(e.target.value);
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
    setEditText(todo.text);
  };

  return (
    <li className={`todo-item ${todo.completed ? 'completed' : ''}`}>
      {isEditing ? (
        <form className="edit-form" onSubmit={handleEditSubmit}>
          <input
            type="text"
            value={editText}
            onChange={handleEditChange}
            className="edit-input"
            autoFocus
          />
          <div className="edit-buttons">
            <button type="submit" className="save-button">Save</button>
            <button type="button" onClick={handleCancelEdit} className="cancel-button">Cancel</button>
          </div>
        </form>
      ) : (
        <>
          <div className="todo-content">
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => onToggleComplete(todo.id)}
              className="todo-checkbox"
            />
            <span className="todo-text">{todo.text}</span>
          </div>
          <div className="todo-actions">
            <button
              onClick={handleEditStart}
              className="edit-button"
              disabled={todo.completed}
            >
              Edit
            </button>
            <button
              onClick={() => onDeleteTodo(todo.id)}
              className="delete-button"
            >
              Delete
            </button>
          </div>
        </>
      )}
    </li>
  );
}

export default ToDoItem;