import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => {
  res.render('home');
});

router.get('/about', (req, res) => {
  res.render('about');
});

router.get('/mission', (req, res) => {
  res.render('mission');
});

router.get('/vision', (req, res) => {
  res.render('vision');
});

router.get('/programs', (req, res) => {
  res.render('programs');
});

router.get('/support', (req, res) => {
  res.render('support');
});

router.get('/contact', (req, res) => {
  res.render('contact');
});

export default router;
