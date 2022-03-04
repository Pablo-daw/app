
// Express
const express = require('express')
const app = express()
const port = 3000;

// Motor de plantillas y ruta a vistas
app.set("view engine", "ejs");
app.set("views", __dirname + "/views");
 
app.use(express.static(__dirname + '/public'))

app.get('/', (req, res) => {
  res.render("index4", { titulo: "EJS dinámico modular" }); //plantilla dinamica views
});

app.use((req,res,next)=>{
    res.status(404).render("4043", { titulo: "Página no encontrada modular", descripcion: "HTTP code 404" }); //plantilla dinamica views 
})

app.listen(port, () => {
  console.log(__dirname,` Example app listening at http://localhost:${port}`)
})
