import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import pagesRouter from './routes/pages.js';

// Recreate __dirname in ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const PORT = 3000;

// Set EJS as the view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Middlewares
app.use(express.urlencoded({ extended: true })); // To parse form data
app.use(express.json());

// Serve static files (like CSS, images) from a public directory
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.use('/', pagesRouter);
app.get('/contact', (req, res) => res.render('contact'));

app.post('/contact', (req, res) => {
  const { name, email, message } = req.body;
  console.log('Contact form submission:', { name, email, message });

  // In production, you’d send this to a database or email
  res.send(`<h2>Thank you, ${name}! Your message has been received.</h2>`);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});