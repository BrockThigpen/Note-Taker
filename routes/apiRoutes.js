// Dependencies
const fs = require('fs');
const db = JSON.parse(fs.readFileSync('db/db.json'));
// Routing
module.exports = app => {
    // GET requests
    app.get('/api/notes', (req, res) => {
        return res.json(db);
    });
    // POST requests
    app.post('/api/notes', (req, res) => {
        let newN = req.body;
        db.push(newN);
        uniqueID();
        reWrite();
        res.json(db);
    });
    // DELETE requests
    app.delete('/api/notes/:id', (req, res) => {
        const deleted = db.findIndex((i) => i.id == req.params.id);
        db.splice(deleted, 1);
        reWrite();
        res.json(db);
    });
    // Unique ID func
    let uniqueID = () => {
        db.forEach((x, i) => {
            x.id = i + 1;
        });
    }
    // Writefile func
    let reWrite = () => {
        let newDB = JSON.stringify(db);
        fs.writeFile('db/db.json', newDB, err => { if (err) throw err });
    }
}