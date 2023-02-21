const app = require('./app');
const http = require('http');
const port = process.env.port || 8080


const server = http.createServer(app)



app.listen(port);