const express = require('express');
const path = require('path');

const app = express();
const port = 3001;

// Serve static files from the project folder
app.use(express.static(path.join(__dirname)));

// Route for the main HTML file
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'form.html'));
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
