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

  const query = req.body.intent.displayName;

  if (query == "Nearest Washroom") {
    console.log("washrrom");
  }

  const result = {
    fulfillmentText: "This is a text response"
  };
  res.send(result);
});

var server = app.listen(port, function() {
  console.log("The server is running on http://localhost:" + port);
});
