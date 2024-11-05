<<<<<<< HEAD
import mysql from "mysql2/promise";
import { ConnectionOptions } from "mysql2";
import dotenv from "dotenv";

dotenv.config();

const configOptions: ConnectionOptions = {
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USERNAME,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
=======
import DotenvFlow from "dotenv-flow";
import mysql from "mysql2/promise";
import { ConnectionOptions } from "mysql2";
import dotonev from "dotenv";
if (process.env.NODE_ENV !== "production") {
  DotenvFlow.config();
}
dotonev.config();
const configOptions: ConnectionOptions = {
  host: "127.0.0.1",
  user: "root",
  password: "cesar##12",
  database: "school",
>>>>>>> 292b7b8 (Deploy)
  port: Number(process.env.MYSQL_PORT) || 3306,
};

const pool = mysql.createPool(configOptions);

export default pool;
