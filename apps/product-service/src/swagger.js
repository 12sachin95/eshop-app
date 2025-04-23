const swaggerAutogen = require("swagger-autogen");

const doc = {
  info: {
    title: "Product Service",
    description: "Product Service API",
    version: "1.0.0",
  },
  host: "localhost:6001",
  schemes: ["http"],
};

const outputFile = "./swagger-output.json";
const endpointsFiles = ["./routes/product.routes.ts"];

swaggerAutogen()(outputFile, endpointsFiles, doc);
