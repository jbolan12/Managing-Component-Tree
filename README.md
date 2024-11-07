# Managing-Component-Tree

# To-Do List App (With Components)

This is a simple React app that demonstrates the use of components. It allows users to manage a to-do list where they can add tasks, mark them as completed, and remove tasks. The app is built using functional components and React hooks like `useState`.

## Features

- Add new tasks to the to-do list.
- Mark tasks as completed with a strike-through effect.
- Remove tasks from the list.
- The app is organized into reusable components (`InputArea`, `TodoItem`, and `TodoList`).

## Project Structure

- **`App.jsx`**: The main component that holds the state and integrates other components.
- **`InputArea.jsx`**: A component for the input field where users type tasks.
- **`TodoItem.jsx`**: A component that represents each individual task in the list.
- **`TodoList.jsx`**: A component that renders the list of tasks and handles interactions like toggling completion and removing tasks.

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/jbolan12/Managing-Component-Tree.git
    ```

2. Navigate into the project directory:
    ```bash
    cd todo-list-app
    ```

3. Install dependencies:
    ```bash
    npm install
    ```

## Usage

To start the app locally:

1. Run the development server:
    ```bash
    npm start
    ```

2. Open your browser and go to [http://localhost:3000](http://localhost:3000) to view the app.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more information.
