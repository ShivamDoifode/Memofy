# 📝 Memofy

A modern full-stack note-taking application built with the MERN stack. Memofy allows users to create, view, edit, and delete notes through a clean and responsive interface.

## 🚀 Features

* Create new notes
* View all saved notes
* Edit existing notes
* Delete notes
* Responsive and modern UI
* Toast notifications for user actions
* RESTful API architecture
* MongoDB database integration
* Rate limiting using Upstash Redis
* Fast frontend powered by Vite

## 🛠️ Tech Stack

### Frontend

* React 19
* Vite
* React Router
* Axios
* Tailwind CSS
* DaisyUI
* Lucide React Icons
* React Hot Toast

### Backend

* Node.js
* Express.js
* MongoDB
* Mongoose
* Dotenv
* CORS

### Additional Services

* Upstash Redis
* Upstash Rate Limiting

---

## 📂 Project Structure

```text
Memofy/
├── frontend/
│   ├── src/
│   ├── public/
│   └── package.json
│
├── backend/
│   ├── src/
│   └── package.json
│
└── package.json
```

---

## ⚙️ Environment Variables

Create a `.env` file inside the `backend` directory.

```env
PORT=5001

MONGO_URI=your_mongodb_connection_string

UPSTASH_REDIS_REST_URL=your_upstash_redis_url
UPSTASH_REDIS_REST_TOKEN=your_upstash_redis_token

NODE_ENV=development
```

---

## 📦 Installation

### Clone the Repository

```bash
git clone https://github.com/ShivamDoifode/Memofy.git
cd Memofy
```

### Install Dependencies

```bash
npm install
npm install --prefix frontend
npm install --prefix backend
```

---

## ▶️ Running Locally

### Start Backend

```bash
cd backend
npm run dev
```

### Start Frontend

```bash
cd frontend
npm run dev
```

Frontend:

```text
http://localhost:5173
```

Backend:

```text
http://localhost:5001
```

---

## 🏗️ Production Build

From the root directory:

```bash
npm run build
npm start
```

---

## 📡 API Endpoints

| Method | Endpoint       | Description    |
| ------ | -------------- | -------------- |
| GET    | /api/notes     | Get all notes  |
| GET    | /api/notes/:id | Get note by ID |
| POST   | /api/notes     | Create a note  |
| PUT    | /api/notes/:id | Update a note  |
| DELETE | /api/notes/:id | Delete a note  |

---


## 🌐 Live Demo

🚀 **Try Memofy Live:**

**https://memofy-d3u5.onrender.com**

---

## 🌐 Deployment

### Application URL

**Live Website:** https://memofy-d3u5.onrender.com

### Hosting Stack

* **Frontend:** React + Vite
* **Backend:** Express.js + Node.js
* **Database:** MongoDB Atlas
* **Rate Limiting:** Upstash Redis
* **Hosting Platform:** Render

### Production Build

From the root directory:

```bash
npm run build
npm start
```

The application is deployed and accessible at:

```text
https://memofy-d3u5.onrender.com
```


## 🔮 Future Improvements

* User Authentication
* Categories & Tags
* Search Notes
* Rich Text Editor
* Dark/Light Theme Toggle
* Note Sharing
* Markdown Support

---

## 🤝 Contributing

Contributions are welcome.

1. Fork the repository
2. Create a new branch

```bash
git checkout -b feature-name
```

3. Commit your changes

```bash
git commit -m "Add feature"
```

4. Push to your branch

```bash
git push origin feature-name
```

5. Open a Pull Request

---

## 👨‍💻 Author

**Shivam Doifode**

GitHub: https://github.com/ShivamDoifode

---

## 📄 License

This project is licensed under the ISC License.
