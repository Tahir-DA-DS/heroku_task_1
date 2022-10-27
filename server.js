const http = require("http");

const port = 3000


const server= http.createServer((req, res)=>{
    
    res.writeHead(200, { 'Content-Type': 'application/json' });
    const data ={slakUsername:'Tahir. A',
    Backend:true,
    Age:26,
    Bio:'I am Tahir popularly refered to as Ola, I am on the Backend Track in HNGi9 participating from a Abuja and I am also a graduate of Statistics'
  }
    res.end(JSON.stringify(data));
    

})


http.get('http://localhost:3000/', (res) => {

})


server.listen(process.env.PORT ||port)