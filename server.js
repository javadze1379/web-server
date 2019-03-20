const express = require('express');
const hbs = require('hbs')
const fs = require('fs')

const app = express();
const port = process.env.PORT || 3000;

hbs.registerPartials(__dirname + '/views/partials')
app.set('view engine', 'hbs')
//app.use get middle wear
app.use(express.static(__dirname + '/public'))
app.use((req,res,next) => {
    const log = `${new Date()} ${req.method} ${req.url}`
   fs.appendFileSync('server.log', log + '\n')
    next()
})

app.get('/', (req, res) => {
    // res.send('<h1>i love this world<h1>')
    res.send({
        name: 'javad',
        duty: 'change your world! spookiely'
    })
});
app.get('/about', (req, res)  => {
    // res.send('<h1>i love this world<h1>')
    res.render('about.hbs', {
        pageTitle: 'About , me',
        fullYear: new Date().getFullYear()
    })
});
app.get('**', (req, res) => {
    // res.send('<h1>i love this world<h1>')
    res.send('<h1>WTF ARE YOU DOING ???!!<h1>')
});

app.listen(port, () => {
    console.log('server runing in port 3000');
    
});
