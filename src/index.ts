<<<<<<< HEAD
import { config } from "dotenv";
import express from "express";
import studentRouter from "./routes/student";
//Para poder acceder a las variables del ambiente (.env)
config();

=======
import DotenvFlow from "dotenv-flow";
import { config } from "dotenv";
import express from "express";
import studentRouter from "./routes/student";
import unknownResource from "./middlewares/unknown-resource";
//Para poder acceder a las variables del ambiente (.env)
config();

if (process.env.NODE_ENV !== "production") {
  DotenvFlow.config();
}
>>>>>>> 292b7b8 (Deploy)
const app = express();

// Middleware para parsear JSON
app.use(express.json());

<<<<<<< HEAD
app.use("/student", studentRouter);

app.listen(process.env.SERVER_PORT, function () {
  console.log("Escuchando puerto " + process.env.SERVER_PORT);
=======
app.use("/api/v1/student", studentRouter);

//Middlewares
app.use(unknownResource);

const port = process.env.SERVER_PORT || 3000;

app.listen(port, function () {
  console.log("Escuchando puerto " + port);
>>>>>>> 292b7b8 (Deploy)
});
