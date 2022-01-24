require('dotenv').config()
const http = require("http");
const app = require("./src");

const server = http.createServer(app);

const port = process.env.PORT || 3000;
server.listen(port, () => console.log(`Server is listening on port ${port}`));
