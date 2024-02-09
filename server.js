const app = require('./app');
const port = process.env.serverPort;
console.log(port);

app.listen(port, async () => {
    console.log('server running');
})