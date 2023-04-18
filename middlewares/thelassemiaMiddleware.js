const thelassemiaMiddleware = async (req, res, next) => {
  const {
    patientName,
    bloodGroup,
    zila,
    thana,
    village,
    gurdianName,
    gurdianMobileNumber,
    contactName,
    mobileNumber,
  } = req.body;

  try {
    if (!patientName) {
      res.status(400).json({
        msg: "Patient name is missing!",
      });
    }
    if (!bloodGroup) {
      res.status(400).json({
        msg: "Blood group is missing",
      });
    }
    if (!zila) {
      res.status(400).json({
        msg: "Zila is missing",
      });
    }
    if (!mobileNumber) {
      res.status(400).json({
        msg: "Mobile Number is missing",
      });
    }
    if (!contactName) {
      res.status(400).json({
        msg: "Contact Name is missing",
      });
    }
    if (!gurdianMobileNumber) {
      res.status(400).json({
        msg: "Gurdian Number is missing",
      });
    }
    if (!village) {
      res.status(400).json({
        msg: "Village is missing",
      });
    }
    if (!gurdianName) {
      res.status(400).json({
        msg: "Gurdian Name is missing",
      });
    }
    if (!thana) {
      res.status(400).json({
        msg: "Thana is missing",
      });
    }
    next();
  } catch (error) {
    res.status(500).json({
      msg: "Server error ",
    });
  }
};

const thelassemiaDonerMiddleware = async (req, res, next) => {
  const { name, permanentAddressDistrict, permanentAddress, presentAddressDistrict, presentAddress, email, phone, blood, day, month, year, gender, password, confirmPassword } = req?.body
  try {
    if (!name) {
      res.status(400).json("Doner Name is missing!");
    } else if (!permanentAddressDistrict || !permanentAddress) {
      res.status(400).json("Doner permanent address is missing!");
    } else if (!presentAddress || !presentAddressDistrict) {
      res.status(400).json("Doner present address is missing!");
    } else if (!phone) {
      res.status(400).json("Doner phone number is missing!");
    } else if (!blood) {
      res.status(400).json("Doner blood group is missing!");
    } else if (!gender) {
      res.status(400).json("Doner gender is missing!");
    } else {
      console.log('success')
      next()
    }
  }catch(e){
    res.status(500).json('Sorry for server error')
  }
}

module.exports = { thelassemiaMiddleware, thelassemiaDonerMiddleware };
