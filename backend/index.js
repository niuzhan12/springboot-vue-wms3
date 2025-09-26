// Simple Node.js server for Vercel
const { spawn } = require('child_process');
const path = require('path');

module.exports = (req, res) => {
  // This is just a placeholder - Vercel will use Docker instead
  res.status(200).json({
    message: 'WMS Backend - Use Docker deployment',
    status: 'OK'
  });
};
