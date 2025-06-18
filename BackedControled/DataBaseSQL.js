import dotenv from "dotenv";
dotenv.config();

const dbConfig = {
  connectionString:process.env.DataBase_URL,
  
  ssl:true
};

export default dbConfig;
