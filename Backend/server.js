import express from 'express';
import cors from 'cors';
import { connectDB } from './config/db.js';
 
const app = express();
const PORT = 8000;
 
// Middleware
app.use(cors());
app.use(express.json());
 
// Test route
app.get('/', (req, res) => {
  res.send("Backend running with PostgreSQL 🚀");
});
 
// Call DB connection
connectDB();
 
// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});