# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

## Instruction:
# Todo List Application with Zustand

## Introduction
Create a simple Todo List application using React and Zustand for state management. By the end, you'll understand how Zustand works and how it makes state management simpler compared to prop drilling or complex Context setups.

## Project Setup

### Step 1: Create a new React project
First, let's set up our React project:
```bash
npx create-vite@latest todo-zustand
cd todo-zustand
# Install Zustand
npm install zustand
```

### Step 2: Set up the project structure
Create the following folder structure in your `src` directory:
```
src/
├── components/
│   ├── TodoInput.jsx
│   ├── TodoItem.jsx
│   └── TodoList.jsx
├── store/
│   └── todoStore.js
├── App.js
├── index.js
```

## Building the Todo Store with Zustand

### Step 3: Create the Zustand store
Now, let's create our Zustand store in `src/store/todoStore.js`:

We're using Zustand's `create` function to make a store
The store has one state item: `todos` (an array)
The store has four actions:
- `addTodo`: Creates a new todo with the given text
- `toggleTodo`: Marks a todo as completed or not completed
- `removeTodo`: Deletes a todo
- `clearCompleted`: Removes all completed todos

## Building the Components

### Step 4: Create the TodoInput component
Create a simple input component that allows adding new todos.

### Step 5: Create the TodoItem component
Create a component for displaying individual todo items.

### Step 6: Create the TodoList component
Create a component that displays all todos.

### Step 7: Update App.js
Now, let's put everything together in the App component.

## Adding Persistence

### Step 8: Add persistence to our store
Let's enhance our store to persist todos in localStorage.

## Explanation and Key Concepts

### How Zustand Works

1. **Store Creation**:
   - We create a central store using `create` from Zustand
   - The store contains both state and actions (functions that modify state)

2. **State Access**:
   - Components access state directly from the store using the hook:
     ```javascript
     useTodoStore(state => state.todos)
     ```
   - Components only subscribe to the specific pieces of state they need

3. **State Updates**:
   - Components call actions from the store to update state
   - Actions use the `set` function to update state immutably
   - When state changes, only components that subscribe to that specific piece of state re-render

4. **Persistence**:
   - The `persist` middleware automatically saves our state to localStorage
   - When the page refreshes, the state is loaded back from localStorage