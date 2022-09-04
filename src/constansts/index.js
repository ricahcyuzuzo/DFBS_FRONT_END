const mode = "dev";
module.exports = {
  backendUrl: mode === "dev" ? "http://localhost:8080/api" : "",
};
