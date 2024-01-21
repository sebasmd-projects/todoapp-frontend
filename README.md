# TO-DO App Frontend

This project is based on the course "Next.js: El framework de React para producción" It has modifications regarding some features and folder and file structure.

## How to Start the Project

### Dependencies

1. [Node.js](https://nodejs.org/en/download)
2. [Git](https://git-scm.com/downloads)

### Download

Clone the repository

  ```powershell
  git clone https://github.com/sebasmd-projects/todoapp-frontend
  ```

Install node packages

  ```powershell
  npm install
  ```

Run development server

  ```powershell
  npm run dev
  ```

## Project Structure

```powershell
\---frontend
    |   .eslintrc.json
    |   .gitignore
    |   jsconfig.json
    |   next.config.js
    |   package-lock.json
    |   package.json
    |   postcss.config.js
    |   README.md
    |   tailwind.config.js
    |   tree.txt
    |
    +---public
    |       favicon.ico
    |       next.svg
    |       vercel.svg
    |
    \---src
        +---app
        |   +---(pages)
        |   |   |   layout.js
        |   |   |   tree.txt
        |   |   |
        |   |   +---(home)
        |   |   |       page.js
        |   |   |
        |   |   \---dashboard
        |   |       |   layout.js
        |   |       |
        |   |       +---(index)
        |   |       |   |   page.js
        |   |       |   |
        |   |       |   \---components
        |   |       |       |   index.js
        |   |       |       |
        |   |       |       \---widget
        |   |       |               WidgetItem.js
        |   |       |
        |   |       +---(pages)
        |   |       |   +---actions
        |   |       |   |       page.js
        |   |       |   |
        |   |       |   +---logs
        |   |       |   |   |   page.js
        |   |       |   |   |
        |   |       |   |   \---components
        |   |       |   |           Table.js
        |   |       |   |           TableItems.js
        |   |       |   |
        |   |       |   \---todos
        |   |       |       |   loading.js
        |   |       |       |   page.js
        |   |       |       |
        |   |       |       +---components
        |   |       |       |   |   index.js
        |   |       |       |   |   ListTodo.js
        |   |       |       |   |   TodoItem.js
        |   |       |       |   |   TodosGrid.js
        |   |       |       |   |
        |   |       |       |   \---css
        |   |       |       |           Loading.module.css
        |   |       |       |           TodoItem.module.css
        |   |       |       |
        |   |       |       +---requests
        |   |       |       |       todos.js
        |   |       |       |
        |   |       |       \---v2
        |   |       |           |   loading.js
        |   |       |           |   page.js
        |   |       |           |
        |   |       |           \---components
        |   |       |                   index.js
        |   |       |                   ListTodo.js
        |   |       |                   TodosGrid.js
        |   |       |                   TodosItem.js
        |   |       |
        |   |       \---components
        |   |           |   index.js
        |   |           |
        |   |           +---sidebar
        |   |           |       menuItems.js
        |   |           |       Sidebar.js
        |   |           |       SidebarItem.js
        |   |           |
        |   |           \---topmenu
        |   |                   TopMenu.js
        |   |
        |   \---css
        |           globals.css
        |
        \---utils
                constants.js
```
