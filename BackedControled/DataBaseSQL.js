import "dotenv/config";
 

const dbConfig = {
  connectionString: process.env.DATABASE_URL,
  ssl:true
};

export default dbConfig;
