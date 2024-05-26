const express = require('express');
const router = express.Router();

// Importing column controller method
const { columnSectionAreaResults } = require('../controllers/column.Controller')

router.route('/').get(columnSectionAreaResults);

module.exports = router;
