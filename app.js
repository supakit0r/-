let express = require('express');

const app = express();

app.use(express.json()); 
app.use(express.urlencoded({extended: true})); 

require('./routes')(app)

// app.get('/status', function(req,res){
//     res.send('Hello nodejs server');
// })

// app.get('/hello/:person', function(req,res){
//     console.log('hello -'+req.params.person);
//     res.send('say hello with ' + req.params.person);
// })
app.get('/minus1', function(req,res){
    let n = 5;
    let m = n-1;
    console.log('number = '+ m +req.params.person);
    res.send(m)
})   
app.get('/plus1', function(req,res){
    let x = 4;
    let z = n+1;
    console.log('number = '+ z +req.params.person);
    res.send(z)
})  



let port = 8081;
app.listen(port, function(){
    console.log('server running on ' + port);
})