const router = require('express').Router();

router.get('/:id',(req,res) => {
    res.send("<h1>this is a test</h1>")
})

module.exports = router;