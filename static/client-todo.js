// A pure vanilla JavaScript implementation of the Todo app
document.addEventListener("DOMContentLoaded", () => {
    console.log("Client Todo script loaded");

    // Initial todos
    let todos = [
      { id: 1, text: 'Learn Preact', completed: false },
      { id: 2, text: 'Build a To-Do app', completed: false },
      { id: 3, text: 'Master Deno', completed: false }
    ];

    // Get DOM elements
    const todoInput = document.querySelector('input[placeholder="Add a new task..."]');
    const addButton = document.querySelector('button.btn');
    const todoList = document.querySelector('ul');
    const todoCounter = document.querySelector('div.text-center.text-gray-500');

    // Log what we found to help with debugging
    console.log("Input element found:", !!todoInput);
    console.log("Add button found:", !!addButton);
    console.log("Todo list found:", !!todoList);
    console.log("Counter found:", !!todoCounter);

    if (!todoInput || !addButton || !todoList || !todoCounter) {
      console.error("Could not find all required DOM elements");
      return;
    }

    // Function to render all todos
    function renderTodos() {
      // Clear the list
      todoList.innerHTML = '';

      // Add each todo item
      todos.forEach(todo => {
        const li = document.createElement('li');
        li.className = 'todo-item group';

        const div = document.createElement('div');
        div.className = 'flex items-center flex-grow';

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.checked = todo.completed;
        checkbox.className = 'h-5 w-5 text-blue-600 rounded border-gray-300 focus:ring-blue-500';
        checkbox.addEventListener('change', () => toggleTodo(todo.id));

        const span = document.createElement('span');
        span.className = 'ml-3 text-gray-700 ' + (todo.completed ? 'line-through text-gray-400' : '');
        span.textContent = todo.text;

        const deleteButton = document.createElement('button');
        deleteButton.className = 'text-red-500 hover:text-red-700 focus:outline-none transition-opacity';
        deleteButton.setAttribute('aria-label', 'Delete task');
        deleteButton.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" /></svg>';
        deleteButton.addEventListener('click', () => deleteTodo(todo.id));

        div.appendChild(checkbox);
        div.appendChild(span);

        li.appendChild(div);
        li.appendChild(deleteButton);

        todoList.appendChild(li);
      });

      // Update counter
      const completedCount = todos.filter(todo => todo.completed).length;
      todoCounter.textContent = `${completedCount} of ${todos.length} tasks completed`;
    }

    // Add todo function
    function addTodo() {
      const text = todoInput.value.trim();
      if (!text) return;

      const newTodo = {
        id: Date.now(),
        text: text,
        completed: false
      };

      todos.push(newTodo);
      todoInput.value = '';
      renderTodos();

      console.log("Todo added:", newTodo);
    }

    // Toggle todo function
    function toggleTodo(id) {
      todos = todos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      );
      renderTodos();

      console.log("Todo toggled:", id);
    }

    // Delete todo function
    function deleteTodo(id) {
      todos = todos.filter(todo => todo.id !== id);
      renderTodos();

      console.log("Todo deleted:", id);
    }

    // Add event listeners
    addButton.addEventListener('click', addTodo);

    todoInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        addTodo();
      }
    });

    // Initial render
    renderTodos();

    // Add a visible indicator on the page
    const debugElement = document.createElement("div");
    debugElement.style.position = "fixed";
    debugElement.style.bottom = "10px";
    debugElement.style.left = "10px";
    debugElement.style.padding = "5px 10px";
    debugElement.style.backgroundColor = "blue";
    debugElement.style.color = "white";
    debugElement.style.borderRadius = "4px";
    debugElement.textContent = "Client Todo Active";
    document.body.appendChild(debugElement);
  });
