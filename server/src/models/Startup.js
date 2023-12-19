const {model, Schema} = require("../utils/mongoose");

const StartupSchema = new Schema({
  SNo: {type: Number},
  Date: {type: String, required: true},
  StartupName: {type: String, required: true},
  IndustryVertical: {type: String},
  SubVertical: {type: String},
  CityLocation: {type: String, required: true},
  InvestorsName: {type: String, required: true},
  InvestmentType: {type: String},
  AmountInUSD: {type: String, required: true},
  Remarks: {type: String},
  EmployeesNo: {type: Number},
});

const Startup = model("Startup", StartupSchema);

module.exports = Startup;
