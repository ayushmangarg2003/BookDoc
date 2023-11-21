const DoctorSchema = require('../Models/DoctorSchema')
const Doctor = require('../Models/DoctorSchema')


// Register
const register = async (req, res) => {
    const { name, email, password, speciality, rating, img, patients, hospital, city } = req.body

    try {
        const doc = await Doctor.register(name, email, password, speciality, rating, img, patients, hospital, city)
        res.status(200).json({ doc })
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

// GET 
const getDocData = async (req, res) => {

    try {
        const doctorData = await Doctor.find({})
        if (!doctorData) {
            return res.status(404).send("error in DoctorRoute")
        }
        res.status(200).json(doctorData)

    } catch (error) {
        console.log("Error" + error);
    }


}

module.exports = { register, getDocData }