# Professional Tech Portfolio

A modern, responsive portfolio website built with React, Vite, and Node.js.

## Project Structure
- `client/`: Frontend React application (Vite)
- `server/`: Backend Express application for contact form

## Setup & Running

### 1. Backend Setup
Navigate to the server directory and install dependencies:
```bash
cd server
npm install
```
Start the backend server:
```bash
node index.js
```
The server runs on http://localhost:5000.
**Note:** To make the contact form email work, create a `.env` file in `server/` with `EMAIL_USER` and `EMAIL_PASS`.

### 2. Frontend Setup
Open a new terminal, navigate to the client directory:
```bash
cd client
npm install
npm run dev
```
The application will run on http://localhost:5173 (or similar).

## Features
- Fully Responsive Design
- Dark/Light Mode
- Smooth Animations (Framer Motion)
- Contact Form with Email Integration
- Dynamic Projects & Experience Sections
