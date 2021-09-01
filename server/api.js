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

router.get("/default", function (req, res) {
	const search = "bob";
	// ILike Function returns case insensitive results, love it!
	pool
		.query("SELECT * FROM names WHERE name ILIKE '%' || $1 || '%'", [search])
		.then((result) => res.json(result.rows))
		.catch((e) => console.error(e));
});

export default router;
