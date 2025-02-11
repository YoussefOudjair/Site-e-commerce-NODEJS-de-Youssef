const path = require('path');

const express = require('express');

const shopController = require('../controllers/shop');

const router = express.Router();

router.get('/', shopController.getIndex);

router.get('/products', shopController.getProducts);

router.get('/products/:productId', shopController.getProduct);

router.get('/cart', shopController.getCart);

router.post('/cart', shopController.postCart);

<<<<<<< HEAD
=======
router.post('/cart-delete-item', shopController.postCartDeleteProduct);

>>>>>>> 03889cc (Ajout de la section panier)
router.get('/orders', shopController.getOrders);

router.get('/checkout', shopController.getCheckout);

<<<<<<< HEAD
module.exports = router;
=======
module.exports = router;
>>>>>>> 03889cc (Ajout de la section panier)
