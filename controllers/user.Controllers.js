const userModel = require("../models/user.Model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const createToken = (_id) => {
  return jwt.sign({ _id }, "DEEP_BLUE_SEA", { expiresIn: "3d" });
};

// signup user controller
const signupUser = async (req, res) => {
  const {
    name,
    permanent_district,
    permanent_address,
    present_address,
    present_district,
    email,
    number,
    blood_group,
    lastDonationDate,
    role,
    birth_date,
    password,
  } = req.body;

  try {
    const existingEmail = await userModel.findOne({ email });

    if (existingEmail) {
      throw new Error("Email already used");
    }

    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);
    const user = await userModel.create({
      name,
      permanent_district,
      permanent_address,
      present_address,
      present_district,
      email,
      number,
      blood_group,
      lastDonationDate,
      role,
      birth_date,
      password: hash,
    });
    const token = createToken(user._id);
    res.status(200).json({ email, token });
  } catch (err) {
    res.status(401).json({ error: err.message });
  }
};

// loginUser controller
const loginUser = async (req, res) => {
  const { number, password } = req.body;

  try {
    const user = await userModel.login(number, password);
    const token = createToken(user._id);

    res.status(200).json({ number, token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// change password
const changePassword = async (req, res) => {
  try {
    const { oldPassword, newPassword } = req.body;
    const user = req.user;

    const isMatch = await bcrypt.compare(oldPassword, user.password);
    if (!isMatch) {
      throw new Error("Old password doesn't match");
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(newPassword, salt);

    user.password = hashedPassword;
    await user.save();

    res.send({ success: true, message: "Password changed successfully" });
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
};

// search user controller
const searchUser = async (req, res) => {
  const { present_district, blood_group } = req.query;

  try {
    const users = await userModel
      .find({ blood_group, present_district })
      .select({
        name: 1,
        present_district: 1,
        present_address: 1,
        number: 1,
        lastDonationDate: 1,
        blood_group: 1,
      });
    res.status(200).json({ users: users });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// export donorController to donorRoute.js
module.exports = { signupUser, loginUser, searchUser, changePassword };
