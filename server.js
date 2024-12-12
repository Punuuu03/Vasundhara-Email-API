import express from 'express';
import cors from 'cors';
import emailRoutes from './routes/emailRoutes.js'; // Ensure the file extension is included

const app = express();

app.use(express.json());
app.use(
  cors({
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true,
  })
);

// Use routes
app.use('/api', emailRoutes);

// Start the server
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
