const  http = require('http')

const HOSTNAME = 'localhost'
const PORT = 4000

function requestHandler(request, response){
   console.log(request)
   response.end("Hello world")
}

const server = http.createServer(requestHandler)

server.listen(PORT, HOSTNAME, () => {
    console.log(`server started succesfully at http://${HOSTNAME}:${PORT}`)
})
