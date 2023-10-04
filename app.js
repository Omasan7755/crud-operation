const express = require ("express")

const productroute = require("./router/product.router")

const app = express()

app.use(`/api`, productroute)

const PORT = 4000

app.listen(PORT) 