const Startup = require("../../models/Startup");

const getStartupCount = async (req, res) => {
  try {
    const estimatedCount = await Startup?.estimatedDocumentCount();
    const countDoc = await Startup?.countDocuments();
    const totalCount = estimatedCount !== null ? estimatedCount : countDoc;
    res.json(totalCount);
  } catch (err) {
    res.status(500).json({message: err.message});
  }
};

module.exports = getStartupCount;
