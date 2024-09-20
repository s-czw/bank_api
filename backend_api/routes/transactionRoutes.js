const express = require('express');
const authMiddleware = require('../middlewares/authMiddleware');
const transactionController = require('../controllers/transactionController');

const router = express.Router();

// Authenticate requests
router.use(authMiddleware);

router.get('/', transactionController.getTransactions);
router.put('/:id', transactionController.updateTransaction);

module.exports = router;