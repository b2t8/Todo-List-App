// Todo List App - JavaScript

class TodoApp {
    constructor() {
        this.todos = [];
        this.currentFilter = 'all';
        this.currentSort = 'date-desc';
        this.STORAGE_KEY = 'todoList';
        this.init();
    }

    init() {
        this.loadTodos();
        this.attachEventListeners();
        this.render();
    }

    // Local Storage Methods
    loadTodos() {
        const saved = localStorage.getItem(this.STORAGE_KEY);
        this.todos = saved ? JSON.parse(saved) : [];
    }

    saveTodos() {
        localStorage.setItem(this.STORAGE_KEY, JSON.stringify(this.todos));
    }

    // Event Listeners
    attachEventListeners() {
        // Form submission
        document.getElementById('todoForm').addEventListener('submit', (e) => {
            e.preventDefault();
            this.addTodo();
        });

        // Filter buttons
        document.querySelectorAll('.filter-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
                e.target.closest('.filter-btn').classList.add('active');
                this.currentFilter = e.target.closest('.filter-btn').dataset.filter;
                this.render();
            });
        });

        // Sort select
        document.getElementById('sortSelect').addEventListener('change', (e) => {
            this.currentSort = e.target.value;
            this.render();
        });

        // Clear completed
        document.getElementById('clearCompleted').addEventListener('click', () => {
            if (confirm('Delete all completed tasks?')) {
                this.todos = this.todos.filter(todo => !todo.completed);
                this.saveTodos();
                this.showToast('Completed tasks cleared');
                this.render();
            }
        });

        // Clear all
        document.getElementById('clearAll').addEventListener('click', () => {
            if (confirm('Delete all tasks? This action cannot be undone.')) {
                this.todos = [];
                this.saveTodos();
                this.showToast('All tasks deleted');
                this.render();
            }
        });

        // Theme toggle
        document.getElementById('themeToggle').addEventListener('click', () => {
            document.body.classList.toggle('dark-mode');
            localStorage.setItem('theme', document.body.classList.contains('dark-mode') ? 'dark' : 'light');
        });

        // Stats toggle
        document.getElementById('statsBtn').addEventListener('click', () => {
            document.getElementById('statsContainer').classList.toggle('show');
        });

        // Load saved theme
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'dark') {
            document.body.classList.add('dark-mode');
        }
    }

    // Add todo
    addTodo() {
        const input = document.getElementById('todoInput');
        const priority = document.getElementById('prioritySelect').value;
        const text = input.value.trim();

        if (!text) {
            this.showToast('Please enter a task');
            return;
        }

        const todo = {
            id: Date.now(),
            text: text,
            completed: false,
            priority: priority,
            createdAt: new Date().toISOString(),
            dueDate: null
        };

        this.todos.unshift(todo);
        this.saveTodos();
        input.value = '';
        document.getElementById('prioritySelect').value = 'medium';
        this.showToast('Task added successfully');
        this.render();
    }

    // Toggle todo completion
    toggleTodo(id) {
        const todo = this.todos.find(t => t.id === id);
        if (todo) {
            todo.completed = !todo.completed;
            this.saveTodos();
            this.showToast(todo.completed ? 'Task completed! 🎉' : 'Task marked as pending');
            this.render();
        }
    }

    // Delete todo
    deleteTodo(id) {
        if (confirm('Delete this task?')) {
            this.todos = this.todos.filter(t => t.id !== id);
            this.saveTodos();
            this.showToast('Task deleted');
            this.render();
        }
    }

    // Filter todos
    getFilteredTodos() {
        let filtered = this.todos;

        switch (this.currentFilter) {
            case 'active':
                filtered = filtered.filter(t => !t.completed);
                break;
            case 'completed':
                filtered = filtered.filter(t => t.completed);
                break;
            case 'high':
                filtered = filtered.filter(t => t.priority === 'high');
                break;
            default:
                // 'all' - no filter
        }

        return this.sortTodos(filtered);
    }

    // Sort todos
    sortTodos(todos) {
        const sorted = [...todos];

        switch (this.currentSort) {
            case 'date-asc':
                sorted.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));
                break;
            case 'priority':
                const priorityOrder = { high: 0, medium: 1, low: 2 };
                sorted.sort((a, b) => priorityOrder[a.priority] - priorityOrder[b.priority]);
                break;
            case 'alphabetical':
                sorted.sort((a, b) => a.text.localeCompare(b.text));
                break;
            case 'date-desc':
            default:
                sorted.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
        }

        return sorted;
    }

    // Format date
    formatDate(dateString) {
        const date = new Date(dateString);
        const today = new Date();
        const yesterday = new Date(today);
        yesterday.setDate(yesterday.getDate() - 1);

        if (date.toDateString() === today.toDateString()) {
            return date.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
        } else if (date.toDateString() === yesterday.toDateString()) {
            return 'Yesterday';
        } else {
            return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
        }
    }

    // Update statistics
    updateStats() {
        const total = this.todos.length;
        const completed = this.todos.filter(t => t.completed).length;
        const pending = total - completed;
        const progress = total === 0 ? 0 : Math.round((completed / total) * 100);

        document.getElementById('totalTasks').textContent = total;
        document.getElementById('completedTasks').textContent = completed;
        document.getElementById('pendingTasks').textContent = pending;
        document.getElementById('progressPercent').textContent = progress + '%';
    }

    // Render todos
    render() {
        const todoList = document.getElementById('todoList');
        const emptyState = document.getElementById('emptyState');
        const filteredTodos = this.getFilteredTodos();

        // Update stats
        this.updateStats();

        // Show/hide action bar
        const hasCompleted = this.todos.some(t => t.completed);
        const actionBar = document.getElementById('actionBar');
        if (this.todos.length > 0) {
            actionBar.classList.add('show');
        } else {
            actionBar.classList.remove('show');
        }

        // Clear list
        todoList.innerHTML = '';

        if (filteredTodos.length === 0) {
            emptyState.style.display = 'flex';
        } else {
            emptyState.style.display = 'none';
            filteredTodos.forEach(todo => {
                todoList.appendChild(this.createTodoElement(todo));
            });
        }
    }

    // Create todo element
    createTodoElement(todo) {
        const div = document.createElement('div');
        div.className = `todo-item ${todo.completed ? 'completed' : ''}`;

        const priorityClass = todo.priority;
        const createdDate = this.formatDate(todo.createdAt);

        div.innerHTML = `
            <div class="checkbox">
                ${todo.completed ? '<i class="fas fa-check"></i>' : ''}
            </div>
            <div class="todo-content">
                <span class="todo-text">${this.escapeHtml(todo.text)}</span>
                <div class="todo-meta">
                    <span class="todo-date">
                        <i class="fas fa-clock"></i>
                        ${createdDate}
                    </span>
                    <span class="priority-badge ${priorityClass}">
                        <i class="fas fa-${priorityClass === 'high' ? 'exclamation' : priorityClass === 'medium' ? 'equals' : 'arrow-down'}"></i>
                        ${this.capitalizeFirst(priorityClass)}
                    </span>
                </div>
            </div>
            <div class="todo-actions">
                <button class="action-icon edit" title="Edit task">
                    <i class="fas fa-edit"></i>
                </button>
                <button class="action-icon delete" title="Delete task">
                    <i class="fas fa-trash"></i>
                </button>
            </div>
        `;

        // Event listeners
        div.querySelector('.checkbox').addEventListener('click', () => {
            this.toggleTodo(todo.id);
        });

        div.querySelector('.delete').addEventListener('click', () => {
            this.deleteTodo(todo.id);
        });

        div.querySelector('.edit').addEventListener('click', () => {
            this.editTodo(todo.id);
        });

        return div;
    }

    // Edit todo (simple version)
    editTodo(id) {
        const todo = this.todos.find(t => t.id === id);
        const newText = prompt('Edit task:', todo.text);
        if (newText && newText.trim()) {
            todo.text = newText.trim();
            this.saveTodos();
            this.showToast('Task updated');
            this.render();
        }
    }

    // Escape HTML to prevent XSS
    escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }

    // Capitalize first letter
    capitalizeFirst(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    // Show toast notification
    showToast(message) {
        const toast = document.getElementById('toast');
        const toastMessage = document.getElementById('toastMessage');
        toastMessage.textContent = message;
        toast.classList.add('show');

        setTimeout(() => {
            toast.classList.remove('show');
        }, 3000);
    }
}

// Initialize app
document.addEventListener('DOMContentLoaded', () => {
    new TodoApp();
});
