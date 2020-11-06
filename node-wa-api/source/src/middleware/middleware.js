exports.validkey = (req, res, next) => {
    var key = req.headers.apikey
    if (key === 'kejarkoding123') {
        next()
    } else {
        var data = {
            success: false,
            message: 'Api Key tidak valid'
        }
        res.send(data)
    }
}