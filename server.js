import express from "express";
import colors from "colors";
import dotenv from 'dotenv';

//Configuração env 
dotenv.config();

//rest object
const app = express()

//rest api
app.get("/", (req, res) => {
    res.send("<h1>Welcome to E-commerce Charuri Info</h1>");
});

//PORT
const PORT = process.env.PORT || 8080;

//run listen 
app.listen(PORT, () => {
    console.log(`Servidor em execução no modo ${process.env.DEV_MODE} na porta ${PORT}`.bgCyan.white);
})