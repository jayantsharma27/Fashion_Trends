const express = require("express")
const getproductcontroller = require("../controllers/Products/getproductcontroller")
const router = express.Router(); 

router.get("/",getproductcontroller);
module.exports = router;