const { Client } = require("pg");

const { DB_USER_NAME, DB_PASSWORD, DB_PORT, DB_HOST, DB_NAME } = process.env;

const client = new Client({
  user: DB_USER_NAME,
  password: DB_PASSWORD,
  port: DB_PORT,
  host: DB_HOST,
  database: DB_NAME,
});

client
  .connect()
  .then(() => console.log("connected"))
  .catch((e) => console.log("error", e));

exports.getRestaurantByTime = async (req, res) => {
  try {
    try {
      const { rows } = await client.query(
        "SELECT * FROM timings WHERE CAST(time as text) LIKE all('{%" +
          req.query.value +
          "%}')"
      );

      res.json({
        success: true,
        message:
          rows.length > 0
            ? "Restaurant list found successfully!"
            : "No data found!",
        data: rows,
      });
    } catch (error) {
      console.log("error: ", error);
    }
  } catch (error) {
    res.status(500).send("Server Error!");
  }
};

exports.getRestaurantByName = async (req, res) => {
  try {
    const { rows } = await client.query(
      "SELECT DISTINCT * FROM timings WHERE name LIKE $1",
      ["%" + req.query.value + "%"]
    );

    res.json({
      success: true,
      message:
        rows.length > 0
          ? "Restaurant list found successfully!"
          : "No data found!",
      data: rows,
    });
  } catch (error) {
    res.status(500).send("Server Error!");
  }
};
