const express = require('express');
const router = express.Router();

const updateController = require('../controllers/update-product');

router.get('/update-product',updateController.updateAddProduct);
router.post('/update-product', updateController.postUpdateProduct);

module.exports = router;