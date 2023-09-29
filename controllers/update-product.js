
const updateProduct = require('../models/product-update');
exports.updateAddProduct = (req,res)=>{
    res.render('update-product',{
        pageTitle: "update-product",
        path: "/admin/update-product",
        formsCSS: true,
        productCSS: true,
        activeUpdateProduct: true

    });
}

exports.postUpdateProduct = (req,res)=>{
    const price = req.body.price;
    const describe = req.body.description;
    const update = new updateProduct(price,describe);
    update.saveUpdates();

    // console.log(`Price : ${price}`);
    res.redirect('/');
}