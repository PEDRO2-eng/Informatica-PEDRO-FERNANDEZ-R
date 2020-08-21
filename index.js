// Se requiere el paquete de express
var express = require('express')
var app = express()


//Variables de aplicación
app.set('appName','Centro de Capacitación Técnica de Luque')
app.set('port', process.env.PORT || 3000)
app.set('view engine','ejs')

// Configurara la carpeta de static
app.use(express.static('public'))


// Ruta principal
app.get('/', (req, res) => {
    var title = app.get('appName')
    res.render('index.ejs', {title: title} )
})

//Ruta Admin

app.get('/admin', (req, res) => {
    var title = app.get('appName')+" | Admin"
    res.render('admin.ejs', {title: title} )
})



//nuevas rutas

app.get('/nuestrahistoria', (req, res) => {
    var title = app.get('appName')+" | nuestrahistoria"
    res.render('nuestrahistoria.ejs', {title: title} )
})

//Ruteo académico 
app.get('/academico', (req, res) => {
    var title = app.get('appName')+" | Académico"
    res.render('academico.ejs', {title: title} )
})

//Ruteo centro de estudiantes
app.get('/centrodeestudiantes', (req, res) => {
    var title = app.get('appName')+" | centrodeestudiantes"
    res.render('centrodeestudiantes.ejs', {title: title} )
})

//Ruteo actividades destacadas
app.get('/actividadesdestacadas', (req, res) => {
    var title = app.get('appName')+" | actividadesdestacadas"
    res.render('actividadesdestacadas.ejs', {title: title} )
})

//Ruteo CCT NOTICIAS 
app.get('/cctnoticias', (req, res) => {
    var title = app.get('appName')+" | cctnoticias"
    res.render('cctnoticias.ejs', {title: title} )
})




// Levanta el servidor
app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`)
})
