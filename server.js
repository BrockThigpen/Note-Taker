// Dependencies
const express = require('express');
// Config
const app = express();
// Port
const PORT = process.env.PORT || 3000;
// Data parsing 
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Routes
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);
// Listener
app.listen(PORT, () => console.log("App listening on PORT: " + PORT));