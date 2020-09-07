const express = require('express');
const router = express.Router();


router.get('/', (req, res) => {
    res.status(200).json({ success: true, data: 'abcd' });
});

router.post('/', (req, res) => {
    res.status(201).json({ success: true, data: 'Created' });
});

router.put('/:id', (req, res) => {
    res.status(200).json({ success: true, data: `Updated ${req.params.id}` });
});

router.delete('/:id', (req, res) => {
    res.status(205).json({ success: true, data: `Deleted ${req.params.id}` });
});

module.exports = router;