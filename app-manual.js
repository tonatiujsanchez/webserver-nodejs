


const http = require('http')


http.createServer(( req, res )=>{

    console.log(req.headers);

    // res.writeHead(200, {'Content-Type': 'application/json'})
    res.setHeader('Content-Disposition', 'attachment; filename=lista.csv' )
    res.writeHead(200, {'Content-Type': 'application/csv'})


    res.write('id, nombre \n')
    res.write('1, Ton \n')
    res.write('2, Nath \n')
    res.write('3, Brandon \n')
    res.write('4, Santi \n')
    res.end()
})
.listen( 8080 )


console.log('Escuchando en el puerto', 8080);