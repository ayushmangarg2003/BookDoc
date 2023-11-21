const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const doctorSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    name: { type: String, required: true },
    speciality: { type: String, required: true },
    rating: { type: String },
    img: { type: String },
    patients: { type: String },
    hospital: { type: String, required: true },
    city: { type: String, required: true },
});

doctorSchema.statics.register = async function (name, email, password, speciality, rating, img, patients, hospital, city) {
    // Validating
    if (!email || !name || !password) {
        throw Error('All fields must be filled')
    }
    const exists = await this.findOne({ email })
    if (exists) {
        throw Error('User already exists')
    }
    const salt = await bcrypt.genSalt(10)
    const hash = await bcrypt.hash(password, salt)
    const doctor = await this.create({ name: name, email: email, password: hash, speciality: speciality, rating: rating, img: img, patients: patients, hospital: hospital, city: city })

    return doctor
}

module.exports = mongoose.model("Doctor", doctorSchema);