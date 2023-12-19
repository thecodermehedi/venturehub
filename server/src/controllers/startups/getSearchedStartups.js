const Startup = require("../../models/Startup");

const getSearchedStartups = async (req, res) => {
  try {
    const {search} = req.query;
    const startups = await Startup.find({
      $or: [
        {StartupName: {$regex: search, $options: "i"}},
        {IndustryVertical: {$regex: search, $options: "i"}},
        {SubVertical: {$regex: search, $options: "i"}},
        {CityLocation: {$regex: search, $options: "i"}},
        {InvestorsName: {$regex: search, $options: "i"}},
        {InvestmentType: {$regex: search, $options: "i"}},
      ],
    });
    res.json(startups);
  } catch (err) {
    res.status(500).json({message: err.message});
  }
};

module.exports = getSearchedStartups;
