const express = require('express');
const router = express.Router();
const PlayersModel = require('../models/players');

// GET players by name search
app.get('/players', async (req, res) => {
    try {
      const players = await PlayersModel.find();
      res.json(players);
    } catch (err) {
      console.error('Error fetching players:', err);
      res.status(500).json({ error: 'Server error' });
    }
  });

module.exports = router;
