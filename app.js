require("dotenv").config() // Lien .env (LIGNE 1 !!!)
require("./models/connection") // Fichier de connection à la BDD Mongoose très important !

var express = require("express")
var path = require("path")
var cookieParser = require("cookie-parser")
var logger = require("morgan")

var indexRouter = require("./routes/index")
var tripsRouter = require("./routes/trips")
var cartRouter = require("./routes/cart")
var bookRouter = require("./routes/book")

var app = express()

const cors = require("cors") // Installation de Cors

const corsOptions = {
    origin: function (origin, callback) {
        // Remplacee 'allowedOrigins' avec vos différents URLs front pouvant accéder au Backend
        const allowedOrigins = [
            "http://localhost:4000",
            "http://localhost:4001",
            "https://www.tablee.app",
            "http://192.168.0.35:4000",
            "http://192.168.0.35:4001"
        ];
        if (allowedOrigins.includes(origin) || !origin) {
            callback(null, true);
        } else {
            callback(new Error("Not allowed by CORS"));
        }
    },
    allowedHeaders: ["Origin", "X-Requested-With", "Content-Type", "Accept"],
    methods: ["GET", "POST", "PUT", "DELETE"],
};

app.use(cors()) // Installation de Cors

app.use(logger("dev"))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, "public")))

app.use("/", indexRouter)
app.use("/trips", tripsRouter)
app.use("/cart", cartRouter)
app.use("/book", bookRouter)

module.exports = app