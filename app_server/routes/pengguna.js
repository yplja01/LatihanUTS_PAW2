var express = require('express');
var router = express.Router();

const penggunaController = require('../controllers/pengguna');
router.get("/", penggunaController.index); //list pengguna
router.post("/insert", penggunaController.insert); //insert pengguna

module.exports = router;