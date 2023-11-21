const User = require('../Models/UserSchema')
const jwt = require('jsonwebtoken')

// login a user
const createToken = (_id) => {
  return jwt.sign({ _id }, process.env.SECRET, { expiresIn: '3d' })
}

const login = async (req, res) => {
  const { email, password } = req.body

  try {
    const user = await User.login(email, password)
    const token = createToken(user._id)
    res.status(200).json({ user, token })
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

// register a user
const register = async (req, res) => {
  const { name, email, password, gender, role } = req.body

  try {
    const user = await User.register(name, email, password, gender, role)
    const token = createToken(user._id)
    res.status(200).json({ user, token })
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}
// GET 
const getUserData = async (req, res) => {
  const { id } = req.params
  try {
    const userdata = await User.findOne({ email: id })
    if (!userdata) {
      return res.status(404).send("error in UserController")
    }
    res.status(200).json(userdata)

  } catch (error) {
    console.log("Error" + error);
  }


}

module.exports = { login, register, getUserData }