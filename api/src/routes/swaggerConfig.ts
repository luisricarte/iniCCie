const swaggerJsdoc = require("swagger-jsdoc");

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Documentação da API iniCCie",
      version: "1.0.0",
      description: "documentação incial do iniCCie - API",
    },
  },
  apis: ["./*.ts"],
};

const specs = swaggerJsdoc(options);

module.exports = specs;
