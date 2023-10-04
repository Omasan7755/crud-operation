const express = require ("express")

const productobj = require ("../controller/product.controller") 

const router = express.Router()

router.post(`/product`, productobj.createProduct)

router.delete(`/product`, productobj.deleteProduct)

router.get(`/product`, productobj.retrieveProduct)

router.put(`/product`, productobj.updateProduct)



module.exports = router