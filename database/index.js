const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 5432

app.use(bodyParser.json()) //.use() puts middleware functions on this path
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

app.get('/', (request, response) => { //.get() defines a route handler for GET requests
    response.json({ info: 'Node.js, Express, and Postgres API' })
})

app.listen(port, () => { //.listen() listens for connections
    console.log(`App running on port ${port}.`)
})