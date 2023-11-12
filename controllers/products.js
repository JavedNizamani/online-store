const Product = require('../models/product');
const db = require('../models/index');
const myProducts = db.Products;

exports.getAddProduct = (req, res, next) => {
  res.render('add-product', {
    pageTitle: 'Add Product',
    path: '/admin/add-product',
    formsCSS: true,
    productCSS: true,
    activeAddProduct: true
  });
};

exports.postAddProduct = async(req, res, next) => {
  // const product = new Product(req.body.title, req.body.image, req.body.price, req.body.description);
  // product.save();

  const {title, image, price, description} = req.body;      // modified this version of code for inserting data into DB
    await myProducts.create({
      title: title,
      image: image,
      price: price,
      description: description
    });

  res.redirect('/');
};



exports.getProducts = async(req, res, next) => {

  Product.fetchAll(products => {
    res.render('shop', {
      prods: products,
      pageTitle: 'Shop',
      path: '/',
      hasProducts: products.length > 0,
      activeShop: true,
      productCSS: true
    });
  });
};
