import "dotenv/config";
import cors from "cors";

import express from "express";
import indexRouter from "./routes/index.routes.js";

const app = express();

app.use(
  cors({
    origin: "http://localhost:5173",
  })
);

app.use(express.json());
app.use(express.static("public"));
app.use("/", indexRouter);

const port = process.env.APPPORT || 3000;
if (process.env.NODE_ENV !== "test") {
  app.listen(port, () => {
    console.log(`Server listening on http://localhost:${port}`);
  });
}

export { app };
