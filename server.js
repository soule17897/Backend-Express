const http = require('http')

const httpServer = http.createServer((req, res) => {

    console.log("this server is listening OK")
})

httpServer.listen(process.env.PORT || 3000)



