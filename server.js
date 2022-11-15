// Added express/path dependencies and setup variables.

const express = require("express");
const PORT = process.env.PORT || 3001;
const app = express();
const { clog } = require('./middleware/clog');
const apiRoutes = require('./routes/apiroutes');
const htmlRoutes = require('./routes/htmlroutes');
//Added middleware 
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

// Import custom middleware, "cLog"
app.use(clog);

//Requiring the route files
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);
