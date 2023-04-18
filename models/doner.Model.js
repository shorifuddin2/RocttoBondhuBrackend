const mongoose = require("mongoose");

const donerSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    permanentAddressDistrict:{
        type: String,
        required: true
    },
    permanentAddress:{
        type: String,
        required: true
    },
    presentAddressDistrict:{
        type: String,
        required: true
    },
    presentAddress:{
        type: String,
        required: true
    },
    email: String,
    phone: {
        type: String,
        required: true
    },
    blood: {
        type: String,
        required: true
    },
    day:{
        type: String,
        required: true
    },
    month:{
        type: String,
        required: true
    },
    year:{
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    confirmPassword: {
        type: String,
        required: true
    }
})

const donerModel = mongoose.model('doner', donerSchema)

module.exports = donerModel