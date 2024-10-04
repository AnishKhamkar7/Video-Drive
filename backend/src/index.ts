import app from "./app";
import connectDB from "./db/db";

connectDB()
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(`SERVER RUNNING ON ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log("ERROR DURING CONNECTION !!!", err);
  });
