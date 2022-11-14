// Added express/path dependencies and setyp variables

const express = require("express");
const path = require('path');
const PORT = process.env.PORT || 3001;
const app = express();

//Added middleware 
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));