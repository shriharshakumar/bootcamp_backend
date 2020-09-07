const express = require('express');
const router = express.Router();
const { getBootcamps, postBootcamp, putBootcamp, deleteBootcamp } = require('../controllers/bootcamp');

router.route('/')
    .get(getBootcamps)
    .post(postBootcamp);

router.route('/:id')
    .put(putBootcamp)
    .delete(deleteBootcamp);

module.exports = router;