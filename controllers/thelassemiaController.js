const thelassemiaModel = require("../models/thalassemiaModel.js");
const donerModel = require('../models/doner.Model')
const createThelassemia = async (req, res) => {
  console.log(req.body);
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

  const info = {
    patientName,
    bloodGroup,
    zila,
    thana,
    village,
    gurdianName,
    gurdianMobileNumber,
    contactName,
    mobileNumber,
  };
  const thelassemiaInfo = new thelassemiaModel(info);
  try {
    await thelassemiaInfo.save();
    res.status(200).json({
      msg: "Data is successfully added",
    });
  } catch (error) {
    res.status(500).json({
      msg: error.message,
    });
  }
};

const donerData = async(req, res) => {
  try{
    const data = req?.body
    const donateInfo = await donerModel.create(data)
    res.status(200).json('Doner data saved')
  }catch(e){
    res.status(400).json('Sorry for server error')
  }
}

module.exports = {createThelassemia, donerData};
