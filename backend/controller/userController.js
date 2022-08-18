// @desc Register User
// @route POST /api/users
// @access Public
const userRegister = (req, res) => {
    res.json({ message:'User register' });
}

// @desc Authenticate User
// @route POST /api/users/login
// @access Public
const loginUser = (req, res) => {
    res.json({ message:'User logged in' });
}

// @desc Get User data
// @route GET /api/users/me
// @access Public
const getMe = (req, res) => {
    res.json({ message:'User data display' });
}

module.exports = {
    userRegister,
    loginUser,
    getMe
};
