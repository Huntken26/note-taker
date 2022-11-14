// Notes from assignment readme
//The following API routes should be created:
// GET /api/notes should read the db.json file and return all saved notes as JSON.
// POST /api/notes should receive a new note to save on the request body, add it to the db.json file, 
// and then return the new note to the client. 
// You'll need to find a way to give each note a unique id when it's saved (look into npm packages that could do this for you).
//Bonus- add a delete route DELETE /api/notes/:id should receive a query parameter that contains the id of a note to delete. 
//To delete a note, you'll need to read all notes from the
// db.json file, remove the note with the given id property, and then rewrite the notes to the db.json file.



//Notes/ code obtained from my class activity file 24-custom middleware. just using it for reference
// const tips = require('express').Router();
// const { readFromFile, readAndAppend } = require('../helpers/fsUtils');
// const uuid = require('../helpers/uuid');

// // GET Route for retrieving all the tips
// tips.get('/', (req, res) => {
//   readFromFile('./db/tips.json').then((data) => res.json(JSON.parse(data)));
// });

// // POST Route for a new UX/UI tip
// tips.post('/', (req, res) => {
//   console.log(req.body);

//   const { username, topic, tip } = req.body;

//   if (req.body) {
//     const newTip = {
//       username,
//       tip,
//       topic,
//       tip_id: uuid(),
//     };

//     readAndAppend(newTip, './db/tips.json');
//     res.json(`Tip added successfully 🚀`);
//   } else {
//     res.error('Error in adding tip');
//   }
// });

// module.exports = tips;