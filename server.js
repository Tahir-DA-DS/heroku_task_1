const http = require("http");
const express = require("express")

const server = express()

const data ={slakUsername:'Tahir. A',
    Backend:true,
    Age:26,
    Bio:'I am Tahir popularly refered to as Ola, I am on the Backend Track in HNGi9 participating from a Abuja and I am also a graduate of Statistics'
  }

server.use((req, res)=>{
    res.send(JSON.stringify(data))

})


server.listen(process.env.PORT || 8000)
