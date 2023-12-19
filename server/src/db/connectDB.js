const mongoose = require('mongoose');
const { nodeEnv, dbUser, dbPass, dbName, dbProdUri, dbDevUri, clusterName } = require('../config');

const getDbUri = () => {
  let dbUri ;
  if (nodeEnv === "production") {
    dbUri = dbProdUri;
    dbUri = dbUri.replace("<username>", dbUser);
    dbUri = dbUri.replace("<password>", dbPass);
    dbUri = dbUri.replace("<dbname>", dbName);
    dbUri = dbUri.replace("<clustername>", clusterName);
  }
  else {
    dbUri = dbDevUri;
    dbUri = dbUri.replace("<username>", dbUser);
    dbUri = dbUri.replace("<password>", dbPass);
    dbUri = dbUri.replace("<dbname>", dbName);
    dbUri = dbUri.replace("<clustername>", clusterName);
  }
  return dbUri;
};

const connectDB = async () => {
  try {
    console.log("Connecting to DB...");
    const dbUri = getDbUri();
    await mongoose.connect(dbUri);
    console.log("Connected to DB");
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

module.exports = connectDB;