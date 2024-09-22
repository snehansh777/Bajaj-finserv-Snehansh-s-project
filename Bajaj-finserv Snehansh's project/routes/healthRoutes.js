// src/routes/healthRoutes.js
const express = require('express');
const healthController = require('../controllers/healthController');
const router = express.Router();

// POST request to handle data
router.post('/', healthController.handlePostRequest);

// GET request for operation code
router.get('/', healthController.getOperationCode);

module.exports = router;
