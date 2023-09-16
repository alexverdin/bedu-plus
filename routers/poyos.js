const express = require("express");
const router = express.Router();

const {getPoyo} = require("../controllers/poyo");

router.get("/getPoyo", getPoyo);

module.exports = router;