// Dependencies
const fs = require('fs');
const db = JSON.parse(fs.readFileSync('db/db.json'));
// Routing
module.exports = app => {
    // GET requests
    app.get('/api/notes', (req, res) => {
        return res.json(uniqueID());
    });
    // POST requests
    app.post('/api/notes', (req, res) => {
        db.push(req.body);
        return res.json(uniqueID());
    });
    // Unique ID
    let uniqueID = () => {
        db.forEach((x, i) => {
            x.id = i + 1;
        });
        return db;
    }
    // DELETE requests
    app.delete('/api/notes/:id', (req, res) => {
        let input = req.body;
        for (let i = 0; i < db.length; i++) {
            if (db[i] === input) {
                db.splice(i, 1);
                i--;
                return res.json(db);
            }
        }
    });
}