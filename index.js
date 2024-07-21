


require('dotenv').config()
const express = require('express')  // returns a function reference.
const app = express()  // . that function is called with express() and app is an object returned by express()
const port = 3000  // number of ports are around 65535 and port virtually receives the request(zahir hai hawa mein toh krega nhi) 

app.get('/', (req, res) => {
  res.send('Hello World!')
})


app.get('/twitter', (req, res) => {
  res.send('yeah pain')
})


app.get('/login', (req, res) => {
  res.send('<h1>please login at chai aur code</h1>')
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})