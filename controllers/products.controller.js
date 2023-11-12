const db = require('../models/index');
const myProducts = db.Products;

const insertProducts = async(req, res)=>{
    try{
      const {title, image, price, description} = req.body;
      await myProducts.create({
        title: title,
        image: image,
        price: price,
        description: description
      });
    }catch(error){
      console.log('Error',error);
    }
  }
  
  module.exports = {
    insertProducts
  }