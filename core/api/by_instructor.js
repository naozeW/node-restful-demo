const express = require('express');
const router = express.Router();
const data_handler = require('./read_data')

router.route('/api/by_instructor/:qname')
    .get(query_data)

function query_data(httpreq,httpres)
{
    let origin_data = data_handler.load_data()

    let qname = httpreq.params.qname.toUpperCase()

    if (!qname) {
        httpres.status(200), httpres.json([]); return false
    }

    var out = [];

    origin_data.forEach(function (item,index) {
        let instructor = item.instructor.toUpperCase()
        if (instructor.indexOf(qname) !== -1) {
            out.push(item)
        }
    })
    httpres.status(200), httpres.json(out); return false
}

module.exports = router;