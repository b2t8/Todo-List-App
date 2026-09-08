# 📝 Modern Todo List Application

A beautiful, modern, and fully-functional todo list application built with vanilla JavaScript, HTML, and CSS. Features include local storage persistence, dark mode, advanced filtering, sorting, and statistics tracking.

## ✨ Features

### Core Features
- ✅ **Add Tasks** - Create new tasks with priority levels (High, Medium, Low)
- 🏃 **Task Management** - Mark tasks as complete, edit, and delete
- 💾 **Local Storage** - All data persists in browser local storage
- 🌙 **Dark Mode** - Toggle between light and dark themes (preference saved)
- 📊 **Statistics** - Track total, completed, pending tasks and progress percentage

### Advanced Features
- 🔍 **Smart Filtering** - Filter by All, Active, Completed, or High Priority
- 📋 **Sorting Options** - Sort by Date (Newest/Oldest), Priority, or Alphabetically
- 🎨 **Modern UI** - Beautiful gradient backgrounds and smooth animations
- 📱 **Fully Responsive** - Works perfectly on desktop, tablet, and mobile
- ⏱️ **Timestamps** - See when each task was created (Today, Yesterday, or date)
- 🎉 **Toast Notifications** - Get feedback for all actions
- 💫 **Smooth Animations** - All interactions are smooth and delightful

## 🎨 Design Highlights

- **Color Schemes**: Beautiful gradient backgrounds with modern purple, pink, cyan, and green themes
- **Typography**: Clean, readable fonts with proper hierarchy
- **Spacing**: Generous padding and margins for comfort
- **Shadows**: Subtle shadows that enhance depth
- **Transitions**: Smooth 300ms transitions on all interactive elements
- **Responsiveness**: Perfect layout on all screen sizes (Desktop, Tablet, Mobile)

## 🚀 Quick Start

### Installation

1. Clone the repository:
```bash
git clone https://github.com/b2t8/Todo-List-App.git
cd Todo-List-App
```

2. No build tools needed! Just open `index.html` in your browser:
```bash
# Simply double-click index.html or use a local server
python -m http.server 8000
# or
npx http-server
```

3. Visit `http://localhost:8000` (or open file directly)

## 📖 How to Use

### Adding Tasks
1. Type your task in the input field
2. Select a priority level (Low, Medium, High)
3. Click "Add Task" or press Enter

### Managing Tasks
- **Complete Task**: Click the checkbox next to the task
- **Edit Task**: Click the edit icon (pencil) to modify the task text
- **Delete Task**: Click the delete icon (trash) to remove the task

### Filtering Tasks
Use the filter buttons to view:
- **All** - Show all tasks
- **Active** - Show incomplete tasks only
- **Completed** - Show completed tasks only
- **High Priority** - Show high priority tasks only

### Sorting Tasks
Use the sort dropdown to organize by:
- **Newest First** - Recently added tasks first (default)
- **Oldest First** - Oldest added tasks first
- **By Priority** - Sorted by High → Medium → Low
- **Alphabetical** - A-Z order

### Theme & Statistics
- **Dark Mode**: Click the moon icon in the header
- **Statistics**: Click the chart icon to show/hide stats

### Bulk Actions
- **Clear Completed**: Remove all completed tasks
- **Clear All**: Delete all tasks (with confirmation)

## 💾 Data Persistence

All tasks are automatically saved to your browser's local storage. This means:
- ✅ Tasks persist even after closing the browser
- ✅ Your data stays on your device (not sent anywhere)
- ✅ No account or login required
- ⓘ Note: Clearing browser data will clear stored tasks

## 📂 Project Structure

```
Todo-List-App/
├── index.html          # Main HTML file
├── styles.css          # All styling and responsiveness
├── script.js           # Todo app logic and interactions
├── package.json        # Project metadata
├── README.md           # This file
└── .gitignore          # Git ignore rules
```

## 🛠️ Technical Details

### Technologies Used
- **HTML5** - Semantic markup
- **CSS3** - Modern styling with CSS variables and grid/flexbox
- **Vanilla JavaScript** - No frameworks or dependencies
- **Font Awesome** - Beautiful icons
- **Local Storage API** - Browser storage

### Code Organization
- **OOP Structure**: TodoApp class encapsulates all functionality
- **Clean Methods**: Well-organized and documented methods
- **Event Delegation**: Efficient event handling
- **Local Storage Integration**: Automatic save/load
- **Security**: XSS prevention with HTML escaping

## 🎨 CSS Features

- **CSS Variables**: Easy theme customization
- **Gradients**: Beautiful background gradients
- **Flexbox & Grid**: Responsive layouts
- **Animations**: Smooth transitions and keyframe animations
- **Dark Mode Support**: Complete dark theme implementation
- **Media Queries**: Mobile-first responsive design

## 📱 Responsive Breakpoints

- **Desktop**: 1200px+
- **Tablet**: 768px - 1199px
- **Mobile**: Below 768px
- **Small Mobile**: Below 480px

## 🔐 Privacy & Security

- All data is stored locally in your browser
- No information is sent to any server
- No cookies or tracking
- HTML is escaped to prevent XSS attacks

## ⚡ Performance

- Lightweight: No external dependencies
- Fast loading: Pure HTML/CSS/JS
- Optimized animations: GPU-accelerated transforms
- Efficient DOM updates: Minimal reflows

## 🌟 Future Enhancements

Possible features for future versions:
- [ ] Cloud sync with backend
- [ ] Categories/Tags for tasks
- [ ] Due dates with reminders
- [ ] Recurring tasks
- [ ] Task time tracking
- [ ] Export to CSV/PDF
- [ ] Collaboration features
- [ ] Mobile app version

## 🐛 Known Limitations

- Data is lost if browser cache is cleared
- No cloud backup or sync
- Edit functionality uses simple prompt dialog
- No recurring tasks yet

## 💡 Tips & Tricks

1. **Keyboard Shortcuts**: Press Enter in the input field to quickly add a task
2. **Dark Mode**: Toggle dark mode for comfortable night usage
3. **Priority Filtering**: Use "High Priority" filter to focus on important tasks
4. **Statistics**: Check the stats panel to see your productivity metrics
5. **Bulk Delete**: Use "Clear Completed" to quickly clean up done tasks

## 📄 License

MIT License - Feel free to use this project for personal or commercial purposes.

## 🤝 Contributing

Contributions are welcome! Feel free to:
- Report bugs
- Suggest features
- Submit pull requests
- Improve documentation

## 📧 Support

If you find any issues or have suggestions, please open an issue on GitHub.

---

**Happy task managing! 🎉**

Made with ❤️ by b2t8
