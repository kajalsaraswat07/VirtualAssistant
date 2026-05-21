# Nexora AI – Full Stack Virtual Agent 
**Nexora AI** is a **Full-Stack AI Virtual Agent** built using the **MERN Stack** (MongoDB, Express, React, Node.js) and powered with **Gemini AI** + **Web Speech API** for real-time voice conversations.  

## Features
- **Voice Input & Output** – Talk naturally with AI (Web Speech API)  
- **Smart AI Replies** – Powered by **Gemini AI**  
- **Authentication System** – Secure login/signup with JWT + bcryptjs  
- **Custom Assistant Image** – Upload & manage via Cloudinary + Multer  
- **Personalization** – Set agent name, branding, and voice  
- **Responsive Design** – Works on all devices  
- **Deployment** – Free & live on Render

## Tech Stack

### Frontend
- React.js
- Vite
- Context API
- CSS / Tailwind CSS

### Backend
- Node.js
- Express.js
- MongoDB
- JWT Authentication

### AI & Integrations
- Gemini API
- Cloudinary

# Nexora AI – Full Stack Virtual Assistant

## Home Page
The landing page introduces users to Nexora AI and provides access to authentication and AI assistant features.

<img width="1904" height="852" alt="Screenshot 2026-05-21 203241" src="https://github.com/user-attachments/assets/d64c804d-fb59-40bc-a88b-989274bd3aaf" />

---

## Login Page
Users can securely log in using email and password authentication with JWT.

<img width="1919" height="861" alt="image" src="https://github.com/user-attachments/assets/fe6589a5-613c-4b5e-b862-eca7ba37c86d" />

---

## AI Chat Interface
Users can interact with the AI assistant using text and voice commands powered by Gemini AI and Web Speech API.

<img width="1867" height="807" alt="image" src="https://github.com/user-attachments/assets/e62157cb-1637-418c-99c8-6a8dbc61563a" />

---

## Profile / Custom Assistant
Users can upload custom assistant images and personalize their AI experience.

<img width="1896" height="855" alt="image" src="https://github.com/user-attachments/assets/293214aa-5366-485b-96b6-f9df4d3a8756" />

## Project Structure

```bash
Nexora-AI/
│
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── middlewares/
│   ├── models/
│   ├── routes/
│   └── index.js
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   ├── context/
│   │   ├── pages/
│   │   └── App.jsx
│   └── package.json
│
└── README.md
---
## Demo
[Live Project Here] (https://virtualassistant-07an.onrender.com)  

---
## Installation & Setup
```bash
# Install dependencies for backend
cd backend
npm install

# Install dependencies for frontend
cd ../frontend
npm install

# Run backend
npm run dev

# Run frontend
npm start
