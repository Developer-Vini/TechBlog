# TechBlog / BentoBlog

TechBlog (or BentoBlog) is a simple blog where you can share your thoughts, ideas, stories, or anything you want.

Posts are anonymous to other users, so your identity is not publicly shown.

## Features

* Create an account
* Publish posts
* Read posts from other users
* Anonymous public posts
* Simple and clean interface

## Project Photos

<img width="1919" height="961" alt="image" src="https://github.com/user-attachments/assets/c8f4571c-90e5-440b-9056-063e9d818a9c" />

<img width="1919" height="954" alt="image" src="https://github.com/user-attachments/assets/d3cdc412-33de-42c9-b8af-abf191668ced" />

<img width="1919" height="961" alt="image" src="https://github.com/user-attachments/assets/cf367b6a-1540-441d-8396-f2abbcbfe98f" />

<img width="1919" height="961" alt="image" src="https://github.com/user-attachments/assets/b935bb30-c948-4e61-9c88-9cf995a41993" />

## Try It

Visit the website, create an account, and start publishing:

**https://blogvin.netlify.app**

No matter what you want to share, just write it and post it.


The project is simple; I should have focused more on the front-end. I focused too much on the back-end (I prefer the back-end).

# Running locally

### 1. Fork this repository and clone your fork:

```powershell
git clone <your-repository>
cd <project-folder
```

### 2. Start the backend:

```cmd
cd backend
npm install
```

### Create a ".env" file and add your Neon database URL:

```env
DATABASE_URL=your_database_url
```

Then run:

```cmd
npm run dev
```

### 3. Open another terminal and start the frontend:

```cmd
cd frontend
open index.html
```

# API

When running locally, the API is available at:


```js
http://localhost:3001
``` 

### Available routes:

- POST /register       → Register a new user
- POST /login          → Log in with your user
- GET  /profile/:id    → Get a user's profile and posts
- GET  /cards          → Get all posts
- POST /cards          → Create a new post (requires authentication)

Example:

```js
http://localhost:3001/cards
```
