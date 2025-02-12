//Create web server
const express = require('express');
const app = express();
const port = 3000;

//Create a function that will handle requests to the /comments endpoint
app.get('/comments', (req, res) => {
    res.send('This is the comments endpoint');
});

//Start the server
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});