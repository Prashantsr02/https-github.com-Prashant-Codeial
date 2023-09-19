const express= require('express');
const expressEjsLayouts = require('express-ejs-layouts');
const cookieParser=require('cookie-parser');
const app=express();
const port=8000;
const db=require('./config/mongoose');

app.use(express.urlencoded());

app.use(cookieParser());

app.use(expressEjsLayouts);

app.use(express.static('./assets'));



app.set('view engine','ejs');

app.set('layout extractStyles',true);
app.set('layout extractScripts',true);


app.set('views','./views');

app.use('/',require('./routes'));
app.listen(port,function(err){
    if(err){
        console.log(`error in server:{$err}`)
    }
    else{
        console.log(`Server is running successfully:${port}`);
    }
})
