const multer = require("multer");
const path = require("path");

    //user multer settings------------------------------------------------------
    const userStorage = multer.diskStorage({
        destination: function (req, file, cb) {
            cb(null, path.join(__dirname, "../../../public/images/user-image"));
        },
        filename: function (req, file, cb) {
            const filename = `${Date.now()}-img${path.extname(file.originalname)}`
            cb(null, filename)
        }
    });
    const userUpload = multer({ storage : userStorage })
    //-----------------------------------------------------------------------------

    //product multer settings ----------------------------------------------------------
    const productStorage = multer.diskStorage({
        destination: (req, file, cb) => {
            cb(null, path.join(__dirname, "../../../public/images/products-image"));
        },
        filename: (req, file, cb) => {
            cb(null, `${Date.now()}_${file.originalname}`);
        }
    });
    const productUpload = multer({ storage : productStorage })
    //---------------------------------------------------------------------------

module.exports = { productUpload, userUpload };