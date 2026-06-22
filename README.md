# 📝 MERN Blog App

A full-stack blogging platform built using the MERN Stack (MongoDB, Express.js, React.js, Node.js). Users can create, edit, publish, and manage blog posts through an intuitive interface, while admins can moderate content through a dedicated dashboard.

## 🚀 Live Demo

### Frontend

https://blog-app-six-ivory-72.vercel.app/

### Backend API

https://blog-app-server-tan-eight.vercel.app/

---

## 📌 Features

### User Features

* View all published blogs
* Search blogs by title or category
* Rich text editor
* Blog categories
* Read blog details
* Comment on blog posts
* Responsive design for mobile and desktop

### Admin Features

* Secure admin authentication
* Create new blog posts
* Upload featured images
* Edit existing blogs
* Delete blogs
* Manage comments
* Dashboard with blog statistics

---

## 🛠️ Tech Stack

### Frontend

* React.js
* React Router DOM
* Axios
* Tailwind CSS

### Backend

* Node.js
* Express.js
* JWT Authentication
* Multer

### Database

* MongoDB Atlas
* Mongoose

### Deployment

* Frontend: Vercel
* Backend: Vercel
* Database: MongoDB Atlas

---

## 📂 Project Structure

```bash
blog-app/
│
├── client/
│   ├── src/
│   ├── public/
│   └── package.json
│
├── server/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   ├── configs/
│   └── package.json
│
└── README.md
│
└── .gitignore
```

## ⚙️ Installation & Setup

### Clone Repository

```bash
git clone https://github.com/yourusername/blog-app.git
cd blog-app
```

### Backend Setup

```bash
cd server
npm install
```

Create a `.env` file:

```env
PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
ADMIN_EMAIL=your_admin_email
ADMIN_PASSWORD=your_admin_password
```

Run Backend:

```bash
npm run server
```

### Frontend Setup

```bash
cd client
npm install
```

Create a `.env` file:

```env
VITE_BASE_URL=http://localhost:5000
```

Run Frontend:

```bash
npm run dev
```

---

## 🔑 Environment Variables

### Backend

```env
MONGODB_URI=
JWT_SECRET=
ADMIN_EMAIL=
ADMIN_PASSWORD=
PORT=
```

### Frontend

```env
VITE_BASE_URL=
```

---

## 📸 Screenshots

Add screenshots of:

* Home Page
* Blog Details Page
* Admin Dashboard
* Create Blog Page
* Comments Management

---

## 📈 Future Improvements

* User authentication
* User profiles
* Like and bookmark blogs
* Email notifications
* Dark mode

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome.

1. Fork the repository
2. Create a new branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

---

## 📜 License

This project is licensed under the MIT License.

---

## 👨‍💻 Author

**Satyarth Shukla**

GitHub: https://github.com/your-github-username

LinkedIn: https://linkedin.com/in/your-linkedin-profile
