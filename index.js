const app = require("./src/app");
const { PORT } = process.env;

const server = app.listen(PORT, () =>
  console.log(`Server runing on PORT:${PORT}`)
);


module.exports = server;