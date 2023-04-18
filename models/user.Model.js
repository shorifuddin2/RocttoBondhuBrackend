const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const model = mongoose.model;
const bcrypt = require("bcrypt");

const userSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    permanent_district: {
        type: String,
        required: true,
    },
    permanent_address: {
        type: String,
        required: true,
    },
    present_address: {
        type: String,
        required: true,
    },
    present_district: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        unique: true,
        required: true,
    },
    number: {
        type: String,
        required: true
    },
    blood_group: {
        type: String,
        required: true,
    },
    lastDonationDate: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        required: true,
    },
    birth_date: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    }
},
    { timestamps: true }
);

userSchema.statics.login = async function (number, password) {
    if (!number || !password) {
        throw new Error("empty field is not allowed");
    }

    const user = await this.findOne({ number });
    if (!user) {
        throw new Error("invalid action");
    }

    const passMatch = await bcrypt.compare(password, user.password);
    if (!passMatch) {
        throw Error("invalid action");
    }

    return user;
};
// export donorModel to donorController.js
module.exports = model("users", userSchema);