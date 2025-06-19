import dotenv from "dotenv";
dotenv.config();

const dbConfig = {
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false // Importante para Render
  }
};

export default dbConfig;
