const Startup = require("../../models/Startup");

const getStartups = async (req, res) => {
  try {
    // const data = await startup?.find(query).skip(skip).limit(pageSize);
    // const estimatedCount = await startup?.estimatedDocumentCount();
    // const countDoc = await startup?.countDocuments();
    // const totalCount = estimatedCount !== null ? estimatedCount : countDoc;
    // const totalPages = Math.ceil(totalCount / pageSize);
    // const nextPage = page < totalPages ? page + 1 : null;
    // const previousPage = page > 1 ? page - 1 : null;
    const data = await Startup?.find();
    res.json(data);
  } catch (err) {
    res.status(500).json({message: err.message});
  }
};

module.exports = getStartups;
