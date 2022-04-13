const express = require("express");
const path = require("path");
const app = express();
const port = 3000;
app.use(express.static(path.join(__dirname, "static")))
app.use('/',require(path.join(__dirname, 'routes/blog.js')))
// app.use(ownMiddleware)
// console.log(__dirname);

app.listen(port, () => {
    // console.log(__dirname);
    // console.log(__filename);
  console.log(`Example app listening on port ${port}`);
});
