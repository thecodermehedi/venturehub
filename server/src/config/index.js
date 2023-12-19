
const config = {
  dbUser: process.env.DB_USER,
  dbPass: process.env.DB_PASS,
  dbName: process.env.DB_NAME,
  dbDevUri: process.env.DB_DEV_URI,
  dbProdUri: process.env.DB_PROD_URI,
  port: process.env.PORT,
  nodeEnv: process.env.NODE_ENV,
  corsOrigin: process.env.CORS_ORIGIN,
  corsLocal: process.env.CORS_LOCAL,
  clusterName: process.env.CLUSTER_NAME,
}

module.exports = config;