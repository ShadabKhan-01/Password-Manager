# Password Manager

A local password manager application built with **React + Vite** for the frontend, **Node.js with Express** for the backend, and **MongoDB** as the database. The application allows you to securely save, edit, delete, and copy passwords associated with URLs and usernames.

**Note:** This project is built for practice purposes and is not production-ready. It does not separately store data for different users, so all data is shared across the application.

---

## Features

- Add new passwords with URL, username, and password fields.
- View a list of saved passwords.
- Edit or delete existing passwords.
- Copy passwords to the clipboard with a single click.
- Runs locally, ensuring your data stays on your machine.

---

## Prerequisites

Before running the application, make sure you have the following installed:

1. [Node.js](https://nodejs.org/) (v14+ recommended)
2. [MongoDB](https://www.mongodb.com/try/download/community) installed and running locally
3. A package manager like npm or yarn

---

## Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/ShadabKhan-01/Password-Manager.git
   cd password-manager
    ```
2. **Set up the Backend:**

- Navigate to the backend folder:
    ```bash
    cd backend
    ```
- Install dependencies:
    ```bash
    npm install
    ```
- Start the server:
    ```bash
    node server.js
    ```
    The backend will run on http://localhost:3000.
3. **Set up the Frontend:**

- Navigate back to the main project folder:
    ```bash
    cd ..
    ```
- Install frontend dependencies:
    ```bash
    npm install
    ```
- Start the development server:
    ```bash
    npm run dev
    ```
    The frontend will run on http://localhost:5173.

4. **Open in Browser:**

- Visit http://localhost:5173 to use the application.
---

## Configuration

- **MongoDB Configuration:** <br>
Ensure MongoDB is running locally and the connection URI is correctly configured in the backend. The default URI is:

    ```bash
    mongodb://localhost:27017/password-manager
    ```
- **Environment Variables:** <br>
Add a .env file in the backend folder to define sensitive data (if needed):

    ```bash
    MONGO_URI=mongodb://localhost:27017/password-manager
    ```
---

## Available Scripts

**Backend Scripts** <br>
`node server.js:` Starts the backend server.

**Frontend Scripts** <br>
`npm run dev:` Starts the development server. <br>
`npm run build:` Builds the app for production. <br>
`npm run preview:` Serves the production build locally.

---

## Future Enhancements
- Implement password encryption for secure storage in the database.
- Add user authentication (e.g., JWT or session-based login).
- Introduce a search feature to quickly find saved passwords.
- Build a desktop app for cross-platform use.
- Include a feature to categorize passwords (e.g., work, personal, etc.).
---

## Contributing
Contributions are welcome! Please fork the repository and create a pull request with your changes.
---

## Contact
For any inquiries or support, feel free to reach out:

Email: iam.shadab.khan.1001@gmail.com <br>
GitHub: [ShadabKhan-01](https://github.com/ShadabKhan-01)