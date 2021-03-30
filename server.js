//server file

const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000

app.use(cors())

app.use(express.static('public'))
app.use(express.static('files'))

let savage = {
    'age': 28,
    'birthName': 'Sheyaa Bin Abraham=Joseph',
    'birthLocation': 'London, England'
}

app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/savage', (request, response) => {
    response.json(savage)
})

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
    // response.json()
})