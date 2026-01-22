# Todo List App

A simple, responsive Todo List application built with React and Vite. Manage your daily tasks efficiently with add, edit, delete, and mark-complete functionality.

I have built this project inorder to learn about react and leveraged AI to build responsive css for mobile and corrections 

## Features

- ✅ **Add Tasks** - Quickly add new tasks with a clean input interface
- ✏️ **Edit Tasks** - Click the edit button to modify existing tasks
- 🗑️ **Delete Tasks** - Remove completed or unwanted tasks
- ✓ **Mark Complete** - Check off tasks as you complete them
- 💾 **Persistent Storage** - Tasks are saved to localStorage and persist across sessions
- 📱 **Responsive Design** - Works seamlessly on mobile, tablet, and desktop devices
- 💬 **Motivational Quote** - Get inspired with a daily quote

## Tech Stack

- **React** - UI library
- **Vite** - Fast build tool and dev server
- **CSS3** - Styling with mobile-first approach
- **localStorage** - Client-side data persistence

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd TodoList_app
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## Usage

### Adding a Task
1. Type your task in the input field that says "Add new task"
2. Press the `+` button or hit Enter
3. Your task will appear at the top of the list

### Editing a Task
1. Click the edit icon (pencil) next to the task you want to modify
2. Update the text in the input field
3. Press Enter to save or Escape to cancel

### Completing a Task
1. Check the checkbox next to a task to mark it as complete
2. Completed tasks will appear with a strikethrough and reduced opacity

### Deleting a Task
1. Click the delete icon (X) next to the task you want to remove
2. The task will be immediately deleted

## Project Structure

```
src/
├── App.jsx           # Main application component with todo logic
├── App.css           # Application styles
├── main.jsx          # React entry point
├── index.css         # Global styles
└── components/
    ├── cards.jsx     # Card component (currently empty)
    └── cards.css     # Card component styles
```

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run lint` - Run ESLint to check code quality
- `npm run preview` - Preview production build locally

## Browser Support

Works on all modern browsers that support:
- ES6+ JavaScript
- CSS Grid and Flexbox
- localStorage API

## License

MIT License - Feel free to use this project for personal or commercial purposes.

---