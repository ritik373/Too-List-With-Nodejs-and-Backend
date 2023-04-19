const express=require('express');
const app=express();
const hbs=require('hbs');
const path=require('path');
const bodyparser=require('body-parser');
const controller=require('./controller/routes')



app.set('views', path.join(__dirname));
app.set('view engine', 'hbs')



app.use(bodyparser.urlencoded({extended:false}));

app.get('/',controller.showForm);
app.post('/datasubmit',controller.submitdata);

app.get('/delete/:id',controller.DeleteItem);

app.get('/addSingleData/:singleId',controller.singleData);




app.listen(8000,(req,res)=>{
    console.log("listening on port 8000...")
})