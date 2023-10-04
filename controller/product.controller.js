const express = require ("express")

const productobj = {
    createProduct: async (req,res)=>{
       return res.json ({msg:`product created successfully`}) 
    },

    retrieveProduct: async (req,res)=>{
        return res.json({msg:`product retreived successfully`})
    },
    updateProduct: async (req,res)=>{
        return res.json({msg:`product updates succesfully`})
    },
    deleteProduct: async (req,res)=>{
        return res.json ({msg:`product deleted succesfully`})
    },
}

module.exports = productobj;