// Dependencies
const fs = require('fs');
const db = JSON.parse(fs.readFileSync('./db/db.json'));
// Routing
module.exports = app => {
    // GET requests
    app.get('/api/notes', (req, res) => {
        return res.json(db);
    });
    // POST requests
    app.post('/api/notes', (req, res) => {
        let newN = req.body;
        console.log(newN);
    });
    // Unique ID
    db.forEach((x, i) => {
        x.id = i+1;
    });
    // DELETE requests
    app.delete('/api/notes:id', (req,res) => {

    });
    console.log(db);
}