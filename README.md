# Pastebin Lite

A simple Pastebin-like web application that allows users to paste text or code and share it using a unique URL. Built using **Next.js** and **Vercel KV (Redis)** for fast storage and retrieval.

---

## Features

* Create and share text/code snippets
* Unique shareable link for each paste
* View count tracking
* Fast data access using Redis (Vercel KV)
* Deployed on Vercel

---

## Tech Stack

* **Frontend:** Next.js (React)
* **Backend:** Next.js API Routes
* **Database:** Vercel KV (Redis)
* **Deployment:** Vercel
* **Version Control:** GitHub

---

## Application Flow

1. User enters text or code in the editor
2. Clicks on **Create Paste**
3. Backend generates a unique paste ID
4. Data is stored in Redis (Vercel KV)
5. A public URL is generated
6. Anyone with the link can view the paste

---

## API Endpoints

### Create Paste

```
POST /api/paste
```

Request Body:

```
{
  "content": "Your text or code here"
}
```

### Get Paste

```
GET /api/paste/{id}
```

---

## Environment Variables

The following environment variables are required:

```
UPSTASH_REDIS_REST_URL=
UPSTASH_REDIS_REST_TOKEN=
```

These are automatically added when Vercel KV is connected.

---

## Local Setup

1. Clone the repository

```
git clone https://github.com/your-username/pastebin-lite.git
cd pastebin-lite
```

2. Install dependencies

```
npm install
```

3. Run the development server

```
npm run dev
```

4. Open in browser

```
http://localhost:3000
```

---

## Deployment

* Push code to GitHub
* Import the repository into Vercel
* Connect Vercel KV (Redis)
* Deploy the project

---

## Use Case

This project demonstrates:

* Full-stack development using Next.js
* REST API creation
* Redis key-value data handling
* Cloud deployment using Vercel

---

