//@desc GET Goals
//@route GET /api/goals
//@access Private
const getGoal = (req, res) => {
    res.status(200).json({ message : 'Get goal' });
}

//@desc SET Goals
//@route SET /api/goals
//@access Private
const setGoal = (req, res) => {
    res.status(200).json({ message : 'Set goal' });
}

//@desc PUT Goals
//@route PUT /api/goals/:id
//@access Private
const updateGoal = (req, res) => {
    res.status(200).json({ message : `Update goal ${req.params.id}` });
}

//@desc DELETE Goals
//@route DELETE /api/goals/:id
//@access Private
const deleteGoal = (req, res) => {
    res.status(200).json({ message : `Delete goal ${req.params.id}` });
}

module.exports = {
    getGoal,
    setGoal,
    updateGoal,
    deleteGoal
}