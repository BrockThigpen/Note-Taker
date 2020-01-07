// Dependencies
const fs = require('fs');
const db = JSON.parse(fs.readFileSync('db/db.json'));
// Routing
module.exports = app => {
    // Unique ID
    let uniqueID = () => {
        db.forEach((x, i) => {
            x.id = i + 1;
        });
        return db;
    }
    // GET requests
    app.get('/api/notes', (req, res) => {
        return res.json(uniqueID());
    });
    // POST requests
    app.post('/api/notes', (req, res) => {
        db.push(req.body);
        return res.json(uniqueID());
    });
    // DELETE requests
    app.delete('/api/notes/:id', (req, res) => {
        const deleted = db.findIndex(i => i.id === req.params.id);
        db.splice(deleted, 1);

        return res.json(db);

    });

}

