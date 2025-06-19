import express from "express";
import pkg from "pg";
import dbConfig from "./DataBaseSQL.js";
const { Pool } = pkg;

const router = express.Router();
const pool = new Pool(dbConfig); // usa el config correcto
/*Routes Data */
router.get("/GetData", async (req, res) => {
  try {
   const result = await pool.query(`
  SELECT 
    a.autoid,
    a.tipoauto,
    a.precio,
    a.status,
    a.description,
    a.yearauto,
    a.img,
    a.typeauto,
    m.marcas,
    m.yearmarca,
    c.carac_motor,
    c.carac_interior,
    c.carac_velocidad,
    c.carac_sistemas
  FROM autos a
  INNER JOIN marcas m ON a.marcas_id = m.marcas_id
  INNER JOIN caracteristicas c ON a.carac_id = c.carac_id;
`);

    res.status(200).json({ data: result.rows });
  } catch (err) {
    console.error("Error retrieving data:", err);
    res.status(500).json({ message: "Error retrieving data" });
  }
});

export default router;
