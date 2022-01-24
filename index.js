const express = require("express");
const mongoose = require('mongoose');
const dotenv = require("dotenv");
const cors = require('cors');
const multer = require("multer");
const path = require("path");
const storyModels = require('./models/story');
const blogModels = require('./models/blog');
const teamModels = require('./models/team');
const officeModels = require('./models/office');
const expertiseModels = require('./models/expretise');
const userModels = require('./models/user');

const port = process.env.PORT || 4040;

const app = express();
app.use(express.json());
app.use(cors());
dotenv.config();

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.r9gms.mongodb.net/clarex?retryWrites=true&w=majority`;

mongoose.connect(uri,
    { useNewUrlParser: true })
    .then(() => {
        console.log('Database Connected')
    })
    .catch(e => {
        return console.log(e)
    })

app.use("/story", storyModels);
app.use("/blogs", blogModels);
app.use("/teams", teamModels);
app.use("/offices", officeModels);
app.use("/expertise", expertiseModels);
app.use("/users", userModels);

// image upload
app.use("/images", express.static(path.join(__dirname, "public/images")));
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "public/images");
    },
    filename: (req, file, cb) => {
        cb(null, req.body.name);
    },
});
const upload = multer({ storage: storage });
app.post("/api/upload", upload.single("file"), (req, res) => {
    try {
        return res.status(200).json("File uploded successfully");
    } catch (error) {
        console.error(error);
    }
});

function errorHandler(err, req, res, next) {
    if (res.headersSent) {
        return next(err)
    }
    res.status(500).json({ error: err });
}

app.listen(port, () => {
    console.log(`Server is running on PORT ${port}`)
})

app.get("/", (req, res) => {
    res.send("Hello World")
})


