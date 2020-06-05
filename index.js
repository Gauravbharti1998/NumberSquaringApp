//In this app we will return the square of a number entered by the user

let express= require('express')
let app = express()
app.set('view engine','ejs')
app.use(express.static(__dirname + '/'))
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.get('/',(req,res)=>{
    res.render('home')
})
app.post('/show',(req,res)=>
{
    console.log(req.body)
    res.render('home2',{val:req.body.val})
})
app.listen("4000",console.log("Running on port 4000"))