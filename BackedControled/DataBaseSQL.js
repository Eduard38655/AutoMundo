import dotenv from "dotenv";
dotenv.config();

const dbConfig = {
  connectionString: process.env.DATABASE_URL,
  ssl:false
};

export default dbConfig;
