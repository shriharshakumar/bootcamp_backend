
// @desc    Get all bootcamps
// @route    GET /api/v1/boocamps
// @access  Public

exports.getBootcamps = (req, res, next) => {
    res.status(200).json({ success: true, data: 'abcd' });
}

// @desc    Get one bootcamps
// @route    GET /api/v1/boocamps
// @access  Public

exports.postBootcamp = (req, res, next) => {
    res.status(201).json({ success: true, data: 'Created' });
}


exports.putBootcamp = (req, res, next) => {
    res.status(200).json({ success: true, data: `Updated ${req.params.id}` });
}


exports.deleteBootcamp = (req, res, next) => {
    res.status(205).json({ success: true, data: `Deleted ${req.params.id}` });
}