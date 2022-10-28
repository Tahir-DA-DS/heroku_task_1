const http = require("http");

http.get('http://localhost:8000/', (res) => {

    let myData=''
    res.on('data', (chunk)=>{myData+=chunk})
    res.on('end', ()=>{
      try {const parsedData = JSON.parse(myData)
        console.log(parsedData)
      }catch(error){
        console.error(error)
      }
    })
})



const server= http.createServer((req, res)=>{
    
    res.writeHead(200, { 'Content-Type': 'application/json' });
    const data ={slakUsername:'Tahir. A',
    Backend:true,
    Age:26,
    Bio:'I am Tahir popularly refered to as Ola, I am on the Backend Track in HNGi9 participating from a Abuja and I am also a graduate of Statistics'
  }
    res.end(JSON.stringify(data));
    

})

server.listen(process.env.PORT || 8000)
