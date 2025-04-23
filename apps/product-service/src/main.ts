import express from "express";
import cors from "cors";
import { errorMiddleware } from "@packages/error-handler/error-middleware";
import cookieParser from "cookie-parser";
import router from "./routes/product.routes";
import swaggerUi from "swagger-ui-express";
const swaggerDocument = require("./swagger-output.json");

const app = express();
app.use(
  cors({
    origin: ["http://localhost:3000"],
    credentials: true,
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);
app.use(cookieParser());
app.use(express.json({ limit: "100mb" }));

app.get("/", (req, res) => {
  res.send({ message: "Hello Product API" });
});

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use("/docs-json", (req, res) => {
  res.send(swaggerDocument);
});

const port = process.env.port || 6002;

// Routes
app.use("/api", router);

app.use(errorMiddleware);

const server = app.listen(port, () => {
  console.log(`Product service is running on http://localhost:${port}`);
  console.log(`Swagger Docs available on http://localhost:${port}/docs-json`);
});

server.on("error", (error) => {
  console.error("server error", error);
});
