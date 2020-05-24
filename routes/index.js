const router = require("express").Router();



router.post('/receipt', function(req, res){
    // return res.json();
    let result = 
    { items : [{
        name: 'banana',
        quantity: 1,
        price : 1.99,
        imported : false,
        taxExemption: true
    }], 
    salesTax : 0,
    total:1.99
    }
    return res.json(result);
})


module.exports = router;