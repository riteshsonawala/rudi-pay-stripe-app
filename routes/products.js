const express = require('express');
const stripe = require('stripe')('--Keys Here!--');
var router = express.Router();

/* GET users listing. */
router.get('/', async (req, res, next) =>{
    try {
        const products = await stripe.products.list();
        res.json(products.data); // Stripe returns products within its 'data' array
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: error.message });
    }
});

router.get('/:aproduct', async (req, res) => {
    const productName = req.params.aproduct;
    try {
        const products = await stripe.products.list();
        const matchingProduct = products.data.find(p => p.name === productName);
        if (!matchingProduct) {
            return res.status(404).json({ message: 'Product not found' });
        }
        res.json(matchingProduct);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: error.message });
    }
});


router.get('/new/:productName', async (req, res) => {
    const productName = req.params.productName;
    try {
        const product = await stripe.products.create({
            name: productName
        });
        res.json({ success: true, product }); // Send success response
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;