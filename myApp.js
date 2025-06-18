let express = require('express');
let app = express();


app.get('/api/:date?', function (req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    date_string = req.params.date

    if (!date_string) {
        let fecha = new Date()
        let unix = Number(fecha)
        return res.json({ "unix": unix, "utc": fecha.toUTCString() })
    }

    if (!Date.parse(date_string)) {

        if (isNaN(date_string)) {
            return res.json({ error: "Invalid Date" })
        }

        let unix = Number(date_string)
        let fecha = new Date(unix)

        return res.json({ "unix": unix, "utc": fecha.toUTCString() })
    }

    let fecha = new Date(date_string)
    let unix = Number(fecha)
    return res.json({ "unix": unix, "utc": fecha.toUTCString() })
})

module.exports = app;







