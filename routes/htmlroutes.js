// Notes from challenge readme
//The following HTML routes should be created:
// GET /notes should return the notes.html file.
// GET * should return the index.html file.

// GET Route for home page
app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/index.html'))
);

// GET Route for notes page
app.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/notes.html'))
);

// Wildcard route to direct users to the home page
app.get('*', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/index.html'))
);