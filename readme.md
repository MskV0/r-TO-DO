# README.md

# To-Do List Application

A simple To-Do List application built with React that allows users to add, edit, delete, and mark tasks as completed.

## Features

- Add new tasks to your to-do list
- Mark tasks as completed with visual indication
- Edit existing tasks with cancel option
- Delete individual tasks
- Reset the entire list with confirmation
- Responsive design for mobile and desktop
- Data persistence using localStorage

## Project Structure

```
to-do-list-app/
├── public/
│   └── vite.svg
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── ToDoList.jsx
│   │   └── ToDoItem.jsx
│   ├── App.css
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── package.json
├── README.md
└── vite.config.js
```

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```
   git clone https://github.com/MskV0/to-do-list-app.git
   cd to-do-list-app
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Start the development server:
   ```
   npm run dev
   ```

4. Open your browser and navigate to:
   ```
   http://localhost:5173
   ```

## Project Requirements Fulfilled

- [x] Created a React application using Vite
- [x] Created all required components (App, Header, ToDoList, ToDoItem)
- [x] Implemented state management for the todo list
- [x] Passed necessary props between components
- [x] Rendered todo items dynamically using map function
- [x] Added unique keys for each todo item
- [x] Implemented add functionality
- [x] Implemented mark as completed functionality
- [x] Implemented delete functionality
- [x] Implemented edit functionality
- [x] Added reset list functionality
- [x] Styled the application for good user experience

## Technologies Used

- React (functional components and hooks)
- Vite
- CSS for styling
- localStorage for data persistence

## License

MIT