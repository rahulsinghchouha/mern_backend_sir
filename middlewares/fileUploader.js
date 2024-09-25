const multer = require("multer");
const path = require("path");

// Disk Storage
// filname, destination

const storage = multer.diskStorage({
	destination: path.join(__dirname, "../public/uploads"),
	filename: (req, file, cb) => {
		const filename = "RHL_UPLD_"+file.originalname.split(" ").join("_");
		cb(null, filename);
	}
});


const uploader = multer({storage});

module.exports = uploader;