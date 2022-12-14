const mongoose = require("mongoose");

const CountrySchema = new mongoose.Schema(
  {
    country: {
      type: String,
      required: true,
    },
    state: {
      type: String,
    },
    MobilePrefix: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const CountryModal = mongoose.model("Country", CountrySchema);
module.exports = CountryModal;
