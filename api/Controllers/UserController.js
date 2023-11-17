const User = require('../Models/UserSchema')
// login a user
const login = async (req, res) => {
  const { email, password } = req.body

  try {
    const user = await User.login(email, password)
    res.status(200).json({ user })
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

// signup a user
const register = async (req, res) => {
  const { name, email, password, gender, role } = req.body

  try {
    const user = await User.register(name, email, password, gender, role)
    res.status(200).json({ user })
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

module.exports = { login, register }