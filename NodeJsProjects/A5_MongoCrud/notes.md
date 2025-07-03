# 🌐 Connect Node.js App to MongoDB Atlas using Mongoose

Follow these step-by-step instructions to connect your Node.js application to a MongoDB Atlas database using Mongoose.

---

## 🧰 Prerequisites

- Node.js installed on your machine
- MongoDB Atlas account (free tier works)
- Code editor or terminal access

---

## 🪜 Step-by-Step Instructions

### ✅ Step 1: Set Up MongoDB Atlas

1. Go to [https://www.mongodb.com/cloud/atlas](https://www.mongodb.com/cloud/atlas) and sign in or sign up.
2. Click **"Build a Database"** → Choose **Free Tier**.
3. Select a cloud provider and region (e.g., AWS + Mumbai).
4. Name your cluster (default name is fine).
5. Wait for the cluster to be created (1–3 minutes).

---

### ✅ Step 2: Create Database & User

1. Go to **"Database" > "Browse Collections" > "Add My Own Data"**
2. Enter:
   - **Database Name**: `yourDBName`
   - **Collection Name**: `users`

3. Go to **"Database Access" > "Add New Database User"**
   - Set **Username** and **Password** (e.g., `user123` / `pass123`)
   - Grant **Read and Write** access to any database

---

### ✅ Step 3: Whitelist Your IP Address

1. Go to **"Network Access" > "Add IP Address"**
2. Choose:
   - `0.0.0.0/0` to allow all IPs (not recommended for production)
   - Or your specific IP for better security

---

### ✅ Step 4: Get the Connection String

1. Go to **Clusters > Connect > Connect your application**
2. Choose:
   - Driver: **Node.js**
   - Version: **4.0 or later**
3. Copy the connection URI:
   - mongodb+srv://<username>:<password>@cluster0.xxxxxx.mongodb.net/?retryWrites=true&w=majority

4. Modify the string to include your DB name:
   - mongodb+srv://user123:pass123@cluster0.xxxxxx.mongodb.net/yourDBName?retryWrites=true&w=majority

---

### ✅ Step 5: Set Up Your Node.js Project

```bash
mkdir myproject
cd myproject
npm init -y
npm install express mongoose
```
## Create a index.js file and add the following code to test the connection
```javascript
const express = require('express');
const mongoose = require('mongoose');
const app = express();

app.use(express.json());

// MongoDB Connection
mongoose.connect('your_connection_string_here', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('✅ MongoDB Connected'))
.catch((err) => console.error('❌ MongoDB Error:', err));

// Test route
app.get('/', (req, res) => {
  res.send('MongoDB connection successful!');
});

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});

```
