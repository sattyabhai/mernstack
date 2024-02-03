const connetMongo = require("./db");
const express = require('express')

connetMongo();

const app = express()
const port = 3000

app.use(express.json())
//Avialable Routes

app.use('/api/auth',require('./routes/auth'))
app.use('/api/notes',require('./routes/notes'))

// app.get('/mycoolapp/test/', function(req, res){
//     res.send("Hello from the 'test' URL");
// });


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
console.log("dfisdf");