const express = require('express');
const router = express.Router();
const data_handler = require('./read_data')

router.route('/api/by_level/:qlevel')
    .get(query_data)

function query_data(httpreq,httpres)
{
    let origin_data = data_handler.load_data()

    let qlevel = httpreq.params.qlevel.toUpperCase()

    if (!qlevel) {
        httpres.status(200), httpres.json([]); return false
    }

    var out = [];

    origin_data.forEach(function (item,index) {
        let course_level = item.course_level.toUpperCase()
        if (course_level == qlevel) {
            out.push(item)
        }
    })
    httpres.status(200), httpres.json(out); return false
}

module.exports = router;