import mongoose from "mongoose";
import app from "./app";

async function main() {
  try {
    await mongoose.connect(
      ""
    );

    const port = 5000;

    app.listen(port, () => {
      console.log(`Example app listening on port ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
}

main();
