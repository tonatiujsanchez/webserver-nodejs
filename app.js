require('dotenv').config()
const express = require('express')
const hbs = require('hbs')


const app = express()
const port = process.env.PORT


// Handlebars
app.set('view engine', 'hbs')
hbs.registerPartials(__dirname + '/views/partials', function (err) {});

// servir contenido estatico
app.use( express.static('./public') )



app.get('/', ( req, res ) => {
    res.render('home', {
        nombre : 'TON J.',
        titulo: 'Node.js + Express',
        headerOrange: false
    })
})

app.get('/generic', ( req, res ) => {
    res.render('generic', {
        nombre : 'TON J.',
        titulo: 'Node.js + Express',
        headerOrange: true
    })
})

app.get('/elements', ( req, res ) => {
    res.render('elements', {
        nombre: 'TON J.',
        titulo: 'Node.js + Express',
        headerOrange: true
    })
})
// app.get('/elements', ( req, res ) => {
//     res.sendFile(__dirname + '/public/elements.html')
// })

app.get('/api', ( req, res ) => {
    res.json({ welcome: 'to API' })
})

app.get('*', ( req, res ) => {
    res.sendFile(__dirname + '/public/404.html')
})


app.listen(port, ()=>{
    console.log(`Corriendo en el puerto ${port}`)
})
