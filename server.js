require ('dotenv/config');
const app = require('./app');


const port = process.env.port;
console.log(port);
app.listen(port, async () => {
   
});
