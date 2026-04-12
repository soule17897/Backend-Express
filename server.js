const http = require('http')
const app = require('./app')


const normalizePort = (val => {
    const port = parseInt(val,10)
    if(isNaN(port)) return val
    if(port >= 0) return port
    else return false
})

const port = normalizePort(process.env.PORT || 3000)
app.set('port',port);

const httpServer = http.createServer(app)

// 3. Basic Error Handling
httpServer.on('error', (error) => {
  if (error.syscall !== 'listen') throw error;
  console.error(`Port ${port} is already in use or requires elevated privileges.`);
  process.exit(1);
});

httpServer.listen(port)

// node --watch server.js 