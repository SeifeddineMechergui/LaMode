const app = require("./app");
const connectDatabase = require("./db/database");

//Handling uncaught Exceptions
process.on("uncaughtException", (err) => {
  console.log(`Error: ${err.message}`);
  console.log(`Shutting down the server due to uncaught exceptions`);
});

//config
if (process.env.NODE_ENV !== "production") {
  require("dotenv").config({
    path: "server/config/.env",
  });
}

//connect db
connectDatabase();

//create server
const server = app.listen(process.env.PORT, () => {
  console.log(
    `Server is running on http://localhost:${process.env.PORT}`
  );
});

//unhandled promise rejection
process.on("unhandledRejection", (err) => {
  console.log(`Shutting down the server due to unhandled promise rejection: ${err.message}`);

  server.close(() => {
    process.exit(1);
  });
});
