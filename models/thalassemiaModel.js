const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const thelassemiaSchema = new Schema(
  {
    patientName: {
      type: String,
      require: true,
    },
    bloodGroup: {
      type: String,
      require: true,
    },
    zila: {
      type: String,
      require: true,
    },
    thana: {
      type: String,
      require: true,
    },
    village: {
      type: String,
      require: true,
    },
    gurdianName: {
      type: String,
      require: true,
    },
    gurdianMobileNumber: {
      type: Number,
      require: true,
    },
    contactName: {
      type: String,
      require: true,
    },
    mobileNumber: {
      type: Number,
      require: true,
    },
  },
  {
    timestamps: true,
  }
);
const thelassemiaModel = mongoose.model("thelassemia", thelassemiaSchema);

module.exports = thelassemiaModel;
