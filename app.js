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
    fulfillmentText: "This is a text response",
    fulfillmentMessages: [
      {
        card: {
          title: "card title",
          subtitle: "card text",
          imageUri:
            "https://assistant.google.com/static/images/molecule/Molecule-Formation-stop.png",
          buttons: [
            {
              text: "button text",
              postback: "https://assistant.google.com/"
            }
          ]
        }
      }
    ],
    source: "example.com",
    payload: {
      google: {
        expectUserResponse: true,
        richResponse: {
          items: [
            {
              simpleResponse: {
                textToSpeech: "this is a simple response"
              }
            }
          ]
        }
      },
      facebook: {
        text: "Hello, Facebook!"
      },
      slack: {
        text: "This is a text response for Slack."
      }
    },
    outputContexts: [
      {
        name:
          "projects/${PROJECT_ID}/agent/sessions/${SESSION_ID}/contexts/context name",
        lifespanCount: 5,
        parameters: {
          param: "param value"
        }
      }
    ],
    followupEventInput: {
      name: "event name",
      languageCode: "en-US",
      parameters: {
        param: "param value"
      }
    }
  };
  res.send(result);
});

var server = app.listen(port, function() {
  console.log("The server is running on http://localhost:" + port);
});
