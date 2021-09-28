import { Router } from "express";
require("dotenv").config();

const router = new Router();

const { Pool } = require("pg");
const dbUrl = process.env.DATABASE_URL;

const pool = new Pool({
	connectionString: dbUrl,
	connectionTimeoutMillis: 5000,
	ssl: { rejectUnauthorized: false },
});

router.get("/", (_, res) => {
	res.json({ message: "Find a Name" });
});

router.get("/search/:search", function (req, res) {
	const { search } = req.params;
	// ILike Function returns case insensitive results, love it!
	pool
		.query("SELECT * FROM names WHERE name ILIKE '%' || $1 || '%'", [search])
		.then((result) => res.json(result.rows))
		.catch((e) => console.error(e));
});

router.get("/randomboy", function (req, res) {
	// OFFSET sets the number of rows to skip before selecting a result!
	pool
		.query(
			"SELECT * FROM names WHERE gender='m' OFFSET floor(random()*12249) LIMIT 1;"
		)
		.then((result) => res.json(result.rows))
		.catch((e) => console.error(e));
});

router.get("/randomgirl", function (req, res) {
	pool
		.query(
			"SELECT * FROM names WHERE gender='f' OFFSET floor(random()*9629) LIMIT 1;"
		)
		.then((result) => res.json(result.rows))
		.catch((e) => console.error(e));
});




export default router;
