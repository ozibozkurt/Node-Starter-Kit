const express = require("express");
const app = express();

app.listen(3000, function () {
  console.log("Server is listening on port 3000. Ready to accept requests!");
});

// req is the Request object, res is the Response object
// (these are just variable names, they can be anything but it's a convention to call them req and res)
app.get("/", function (req, res) {
  res.send("Hello World!");
});

app.get("/even", function (req, res) {
  console.log(req.query);
  if (req.query.number) {
    let oddOrEven = parseInt(req.query.number) % 2 === 0;
    let reply = { number: req.query.number, answer: oddOrEven };
    res.json(reply);
  } else {
    res.json({ error: "You need to provide a number" });
  }
});

app.get("/chocolate", function (request, response) {
  // to set the Content-type of the response...
  // see https://stackoverflow.com/questions/51661744/how-to-set-content-type-when-doing-res-send

  // get the amount from the query string...
  if (request.query.amount) {
    const numberOfBars = parseInt(request.query.amount);
    response.send(`Here are your ${numberOfBars} bars of chocolate`);
  } else {
    response.send("You aren't getting any chocolate");
  }
});

app.get("/location", function (req, res) {
  let lat = req.query.lat;
  let lng = req.query.lng;
  res.send(`You searched for Lat: ${lat} and Lng: ${lng}`);
});
