const express = require('express');
const router = express.Router();

router.get('/', function (req, res, next) {
    res.status(200).send({
        title: "Hello Avanade",
        version: "0.0.4"
    });
});

module.exports = router;
