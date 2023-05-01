const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    // res.render('index', {title: "Node.js"})
    console.log(req.oidc.isAuthenticated());
})

module.exports = router