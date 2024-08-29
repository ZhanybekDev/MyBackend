const http = require('http')

let requestsCount = 0

const server = http.createServer((request, response) => {
    requestsCount++

    let responseText = ""

    switch (request.url){
        case '/zhanybek':
            responseText = 'Zhanybek'
            break;
        case '/':
        case '/amina':
            responseText = 'Amina'
            break;
        default:
            responseText = 'Page not found 404'
    }

    response.write(responseText + " O!" + requestsCount)
    response.end()
})

server.listen(3003)
