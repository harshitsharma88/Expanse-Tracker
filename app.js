const express=require('express');
const app=express();
const expnsapp=require('./model/model');
const routes=require('./routes/expenseroute');
const bodyparser=require('body-parser');
const cors=require('cors');

app.use(cors());

app.use(bodyparser.json());

app.use('/expanse',routes);

expnsapp.sync().then(()=>{
    app.listen(3000,()=>{
        console.log("server Started 3000");
    })
})
