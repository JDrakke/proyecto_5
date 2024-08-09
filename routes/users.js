const express = require('express');
const router = express.Router();
const User = require('../models/User');

router.post('/register', async (req, res) => {
  const { username, password } = req.body;
  let user = await User.findOne({ username });
  if (user) return res.status(400).send('User already exists');

  user = new User({ username, password });
  await user.save();
  const token = user.generateAuthToken();
  res.json({ token });
});

router.post('/login', async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username });
  if (!user || !(await user.comparePassword(password))) return res.status(400).send('Invalid credentials');

  const token = user.generateAuthToken();
  res.json({ token });
});

module.exports = router;
