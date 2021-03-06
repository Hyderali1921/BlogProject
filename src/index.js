const express = require("express");
const bodyParser = require("body-parser");
const route = require("./router/route.js");
const { default: mongoose } = require("mongoose");
const validator = require('./middleware/validation')
const app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

mongoose
  .connect(
    "mongodb+srv://hyderali1921:nkkytnwlsFVYce0x@cluster0.apaia.mongodb.net/hyderali1921",
    {
      useNewUrlParser: true,
    }
  )
  .then(() => console.log("MongoDb is connected"))
  .catch((err) => console.log(err));


app.use(validator.validateRequest)

app.use("/", route);

app.listen(process.env.PORT || 3000, function () {
  console.log("Express app running on port " + (process.env.PORT || 3000));
});
   