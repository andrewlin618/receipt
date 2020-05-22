const express = require("express");
var bodyParser = require('body-parser')

// Configure body parsing for AJAX requests
const app = express();
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// Use Routes;
const routes = require("./routes");
app.use("/", routes);

const PORT = process.env.PORT || 3001;

app.listen(PORT, function() {
    console.log(`🌎 ==> API server now on port ${PORT}!`);
    console.log(`🌎 ==> Visit: http://localhost:${PORT}`);
    
});