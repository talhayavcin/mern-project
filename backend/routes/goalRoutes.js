const express = require('express');
const { getGoal, setGoal, updateGoal, deleteGoal } = require('../controller/goalController');
const router = express.Router();
const { protect } = require('../middleware/authMiddleware');

router.route('/').get(protect, getGoal).post(protect, setGoal)
router.route('/:id').put(protect, updateGoal).delete(protect, deleteGoal)

module.exports = router