const router = require("../../utils/router");

const {
  getStartups,
  getStartupCount,
  addStartup,
  getSearchedStartups,
} = require("../../controllers/startups");

router.get("/api/v1/startups", getStartups);
router.get("/api/v1/startup-count", getStartupCount);
router.post("/api/v1/startups", addStartup);
router.get("/api/v1/searchedStartups", getSearchedStartups);

module.exports = router;
