const express = require("express")
const app = express();
const path = require("path")
app.use(express.static(path.join(__dirname, 'public')));
app.get('/', function (req, resp) {
    resp.sendFile(path.join(__dirname + '/index.html'));
});
app.listen(8000, function () {
    console.log("server is running on port 8000")
});
