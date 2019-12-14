var express = require("express"),
  path = require("path"),
  bodyParser = require("body-parser"),
  app = express();

var port = process.env.PORT || 3000;

app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use(bodyParser.json());

app.use(express.static(path.resolve(__dirname, "public")));

app.get("/", function(req, res) {
  res.send("Washroom Google Actions - GET");
});

app.post("/", function(req, res) {
  console.log("req body", JSON.stringify(req.body));
  console.log("req params", JSON.stringify(req.params));
  res.send("Washroom Google Actions - POST");
});

var server = app.listen(port, function() {
  console.log("The server is running on http://localhost:" + port);
});
