import dotenv from "dotenv";
dotenv.config();

const dbConfig = {
  connectionString: process.env.DATABASE_URL,
  ssl:true
};

export default dbConfig;
