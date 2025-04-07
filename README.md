# Preact TypeScript Deno Todo Application

A simple, modern todo list application built with Preact, TypeScript, and Deno. This project demonstrates how to create a full-stack application using these technologies with server-side rendering and optional client-side hydration.

## Prerequisites

- Deno ≥ 2.2 (Developed with Deno 2.2.8)

## Features

- ✅ Server-side rendered Preact application
- ✅ TypeScript for type safety
- ✅ Tailwind CSS for styling
- ✅ Both Preact and vanilla JS implementations
- ✅ Todo creation, completion toggling, and deletion

## Getting Started

### Installation

1. Install Deno (version 2.2 or higher):

   ```bash
   # macOS or Linux
   curl -fsSL https://deno.land/x/install/install.sh | sh
   
   # Windows (PowerShell)
   irm https://deno.land/install.ps1 | iex
   ```

2. Clone this repository:

   ```bash
   git clone https://github.com/metaphorpritam/deno-preact-app.git
   cd deno-preact-app
   ```

### Running the Application

Start the development server with file watching:

```bash
deno task dev
```

Build for production:

```bash
deno task build
```

Preview production build:

```bash
deno task preview
```

The application will be available at [http://localhost:8000](http://localhost:8000).

## Project Structure

```txt
/
├── .gitignore               # Git ignore file
├── deno.json                # Deno configuration
├── main.tsx                 # Entry point and server
├── main_test.ts             # Tests (empty)
├── tailwind.config.js       # Tailwind CSS configuration
├── src/
│   ├── App.tsx              # Main application component
│   ├── styles.css           # Tailwind and custom styles
│   └── components/
│       ├── TodoItem.tsx     # Individual todo item component
│       └── TodoList.tsx     # Todo list component with state
└── static/
    ├── client-todo.js       # Vanilla JS implementation
    ├── client.jsx           # Client-side hydration
    └── debug.js             # Debug utilities
```

## Learning Points

This project serves as an excellent reference for the following concepts:

### 1. Deno Fundamentals

- **Deno Configuration**: The `deno.json` file demonstrates how to configure imports, compiler options, and tasks.
- **File Serving**: The main server showcases how to serve static files using Deno's standard library.
- **HTTP Server**: Learn how to create a basic HTTP server with Deno.

### 2. Preact with TypeScript

- **Components**: See how to structure functional components with TypeScript interfaces.
- **Hooks**: The project uses useState and useEffect hooks for state management.
- **Props & Types**: Learn how to define and use TypeScript interfaces for component props.

### 3. Server-Side Rendering

- **renderToString**: The main.tsx file demonstrates how to render Preact components to HTML strings on the server.
- **Hydration**: The client.jsx file shows how to hydrate server-rendered content for interactivity.

### 4. CSS with Tailwind

- **Tailwind Integration**: See how to process Tailwind CSS in a Deno application.
- **Custom Component Classes**: The styles.css file shows how to create reusable component classes with @layer.
- **Responsive Design**: The layout adapts to different screen sizes using Tailwind's responsive utilities.

### 5. JavaScript Implementations

- **Dual Implementation**: The project includes both a Preact implementation and a vanilla JavaScript implementation, allowing you to compare approaches.
- **DOM Manipulation**: The vanilla JS implementation demonstrates direct DOM manipulation for the same functionality.

### 6. TypeScript Best Practices

- **Interfaces**: See how to define and use TypeScript interfaces for better type safety.
- **Type Safety**: The project demonstrates TypeScript's type checking for function arguments and state.

## Implementation Details

### State Management

The application uses Preact's useState and useEffect hooks to manage the todo list state:

- Todos are stored as an array of objects with id, text, and completed properties
- useEffect is used to update the completed count whenever the todos change
- Local state is used for the input field value

### CSS Architecture

The project uses a combination of:

- Tailwind utility classes for most styling
- Custom component classes defined in src/styles.css for reusable elements
- CSS transitions for animations

### Server Architecture

The server:

1. Processes CSS with Tailwind on startup
2. Serves static files from the static/ directory
3. Renders the App component to HTML and serves it with appropriate headers

## Extending This Project

Ideas for extending this project:

- Add persistent storage (localStorage or a database)
- Implement filtering (All, Active, Completed)
- Add due dates to todos
- Create multiple todo lists
- Add user authentication

## License

[MIT License](LICENSE)
