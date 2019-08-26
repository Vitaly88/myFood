const express = require("express");
const favicon = require("express-favicon");
const path = require("path");
const port = process.env.PORT || 3000;
const app = express();
app.use(favicon(__dirname + "/public/favicon.ico"));
// the __dirname is the current directory from where the script is running
app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, "build")));
app.get("/ping", function(req, res) {
  return res.send("pong");
});

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  app.get("/*", function(req, res) {
    res.sendFile(path.join(__dirname, "client/build", "index.html"));
  });
} else {
  app.use(express.static(path.join(__dirname, "/public")));
  app.get("/*", function(req, res) {
    res.sendFile(path.join(__dirname, "/public/index.html"));
  });
}

app.listen(port);
