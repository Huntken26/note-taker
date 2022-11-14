// Added express/path dependencies and setyp variables.

const express = require("express");
const path = require('path');
const PORT = process.env.PORT || 3001;
const app = express();
const { clog } = require('./middleware/clog');

//Added middleware 
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

// Import custom middleware, "cLog"
app.use(clog);

//Requiring the routes for the html and notes files
require('./routes/routes')(app);

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);
