// modules/logger.js
// Custom logger module

function log(message) {
  const timestamp = new Date().toISOString();
  console.log(`[LOG ${timestamp}] ${message}`);
}

module.exports = log;