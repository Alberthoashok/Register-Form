# User Registration Form (React + Node.js + SQLite)

This project is a simple user registration form built using **React** for the frontend and **Node.js with Express and SQLite** for the backend. It allows users to register by entering their **name, email, and password**, and sends the data to a backend API.

## Features

- **User Registration Form:** Collects name, email, and password from users.
- **API Integration:** Sends form data to a backend running on `http://localhost:5000/register`.
- **Error Handling:** Displays appropriate success or error messages.
- **Asynchronous Requests:** Uses `fetch` API for HTTP requests.

---

## 🛠 Tech Stack

### **Frontend:**
- React.js
- CSS
- Fetch API for HTTP requests

### **Backend:**
- Node.js
- Express.js
- SQLite (for database storage)

---

## 📂 Project Structure

/my-project │── /backend │ ├── server.js # Node.js Express Server │ ├── database.js # SQLite Database Connection │ ├── routes.js # API Routes for User Registration │── /frontend │ ├── src/ │ │ ├── App.js # React Registration Form Component │ │ ├── index.js # React Entry Point │ │ ├── App.css # Styling for Registration Form │── package.json │── README.md # Documentation

yaml
Copy
Edit

---

## 🚀 Getting Started

### **1️⃣ Clone the Repository**
```sh
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name
🎨 Frontend (React) Setup
2️⃣ Install Dependencies
Navigate to the frontend folder and install dependencies:

sh
Copy
Edit
cd frontend
npm install
3️⃣ Start the Frontend
Run the React development server:

sh
Copy
Edit
npm start
The frontend should now be running on http://localhost:3000.

🔧 Backend (Node.js) Setup
4️⃣ Install Dependencies
Navigate to the backend folder and install dependencies:

sh
Copy
Edit
cd backend
npm install express sqlite3 cors body-parser
5️⃣ Start the Backend
Run the backend server:

sh
Copy
Edit
node server.js
The backend should now be running on http://localhost:5000.
