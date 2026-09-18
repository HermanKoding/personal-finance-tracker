import express from 'express';

const app = express();
const PORT = 5000;

// This allows our server to accept and read JSON data sent to it
app.use(express.json());

// A simple test route to make sure our server is alive
app.get('/api/test', (req, res) => {
    res.json({ message: "Hello! Your Express server is working perfectly!" });
});

// Tell the server to start listening for requests
app.listen(PORT, () => {
    console.log(`🚀 Server is running on http://localhost:${PORT}`);
});
