module.exports = {
  "lct-krasnodar-backend": {
    input: "http://87.242.88.146:8080/swagger/v1/swagger.json",
    output: {
      target: `./shared/api/api.generated.ts`,
      client: "axios-functions",
      prettier: true,
      override: {
        mutator: {
          path: "./shared/api/custom-instance.ts",
          name: `customInstance`,
        },
      },
    },
  },
};
