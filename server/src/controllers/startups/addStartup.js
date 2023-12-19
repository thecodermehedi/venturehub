const Startup = require("../../models/Startup");

const addStartup = async (req, res) => {
  try {
    const startup = new Startup(req.body);
    const data = await startup.save();
    res.json(data);
  } catch (err) {
    res.status(500).json({message: err.message});
  }
};

module.exports = addStartup;
