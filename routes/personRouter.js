const express = require("express");
const personController = require("../controllers/personController");
const uploader = require("../middlewares/fileUploader");
const personRouter = express.Router();



personRouter.get("/get-all", personController.getAllPersons);
personRouter.post("/add", uploader.single("pic"), personController.addPerson);

module.exports = {personRouter}