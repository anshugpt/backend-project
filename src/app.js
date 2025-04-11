import express from "express";
import cors from "cors";

const app = express();

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);
app.use(express.json({ limit: "21kb" }));
app.use(express.urlencoded({ extended: true, limit: "21kb" }));
app.use(express.static("public"));
app.use(cookieParser());

export { app };
