require("dotenv").config();
const express = require("express"); //commonjs
const configViewEngine = require("./config/viewEngine");
const userAPI = require("./routes/userRouter");
const { getHomepage } = require("./controllers/userController");
const { PrismaClient } = require("@prisma/client");
const cors = require("cors");
const { roleRout } = require("./routes/roleRouter");
const userRoute = require("./routes/userRouter");
const app = express();
const port = process.env.PORT || 8888;
const prefix = "/api/v1"
//config cors
app.use(cors());

//config req.body
app.use(express.json()); // for json
app.use(express.urlencoded({ extended: true })); // for form data

//config template engine
configViewEngine(app);

const webAPI = express.Router();
webAPI.get("/", getHomepage);

app.use("/", webAPI);

//khai báo userAPI
app.use(prefix, userRoute);
app.use(prefix, roleRout);


;
(async () => {
  try {
    //using mongoose
    // await connection();

    app.listen(port, () => {
      console.log(`Backend Nodejs App listening on port ${port}`);
    });
  } catch (error) {
    console.log(">>> Error connect to DB: ", error);
  }
})();
