const express=require('express')
const path=require('path')
var app=express();
const {prod}=require('./productData')
// const {Item}=require('./data')
// app.get('/api/products/:productID',(req,res)=>{
//      const {productID}=req.params
//     const singleProduct=Item.find((product)=>product.id==parseInt(productID))
//     res.json(singleProduct)
// })
// app.get('/',(req,res)=>{
//     const newProducts=Item.map((products)=>{
//         const{id,name,image}=products
//         return {id,name,image}
//     })
//     res.json(newProducts) 
// })
app.get('/api/product',(req,res)=>{
   const {name,min}=req.query
   const filterProducts=prod.filter((products)=>{
    return products.category.startsWith(name)&&products.price<min
   })
   console.log(filterProducts)
   res.json(filterProducts)
})
app.get('/',(req,res)=>{
    const fetchProduct=prod.map((products)=>{
        const{productID,name,price,category}=products
        return {productID,name,price,category}
    })
   
    res.json(fetchProduct)
})
app.listen(3000,()=>{
    console.log("server started")
});
