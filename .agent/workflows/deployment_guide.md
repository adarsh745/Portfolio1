---
description: Deploying the MERN Stack Portfolio
---

# Deployment Guide

This project consists of two parts:
1. **Client**: React + Vite (Frontend)
2. **Server**: Node.js + Express (Backend)

We will deploy the **Client to Vercel** and the **Server to Render**.

## 1. Preparation

Ensure you have a GitHub repository and both the `client` and `server` folders are committed.

## 2. Deploy Server (Backend) to Render

Render is a great platform for hosting Node.js applications.

1.  **Sign up/Login** to [Render](https://render.com/).
2.  Click **"New +"** and select **"Web Service"**.
3.  Connect your GitHub repository.
4.  Configure the service:
    *   **Name**: `my-portfolio-server` (or similar)
    *   **Root Directory**: `server`
    *   **Runtime**: `Node`
    *   **Build Command**: `npm install`
    *   **Start Command**: `node index.js`
5.  **Environment Variables**:
    *   Scroll down to "Environment Variables".
    *   Add `EMAIL_USER`: Your Gmail address.
    *   Add `EMAIL_PASS`: Your Gmail App Password.
    *   Add `PORT`: `5000` (Optional, Render sets usually sets its own PORT, so better to use `process.env.PORT` in code, which we do).
6.  Click **"Create Web Service"**.
7.  Wait for the deployment to finish. **Copy the URL** (e.g., `https://my-portfolio-server.onrender.com`).

## 3. Deploy Client (Frontend) to Vercel

Vercel is the creators of Next.js and provides excellent hosting for React apps.

1.  **Sign up/Login** to [Vercel](https://vercel.com/).
2.  Click **"Add New..."** -> **"Project"**.
3.  Import your GitHub repository.
4.  Configure the project:
    *   **Root Directory**: Click "Edit" and select `client`.
    *   **Framework Preset**: Vite
    *   **Build Command**: `npm run build` (default)
    *   **Output Directory**: `dist` (default)
5.  **Environment Variables**:
    *   Expand "Environment Variables".
    *   Key: `VITE_API_URL`
    *   Value: The URL you copied from Render (e.g., `https://my-portfolio-server.onrender.com`). **Do not add a trailing slash**.
6.  Click **"Deploy"**.

## 4. Final Testing

1.  Visit your new Vercel URL.
2.  Go to the **Contact** section.
3.  Send a test message. It should use the Render backend to send the email.

**Troubleshooting:**
*   **CORS Error**: If you see a CORS error, you might need to update the `cors` configuration in `server/index.js` to allow your specific Vercel domain.
    *   In `server/index.js`, update `app.use(cors())` to:
        ```javascript
        app.use(cors({
            origin: ['https://your-vercel-app.vercel.app', 'http://localhost:3000', 'http://localhost:5173']
        }));
        ```
