const { app } = require("./app");

require("dotenv").config();
const port = process.env.PORT;

// port server
app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
