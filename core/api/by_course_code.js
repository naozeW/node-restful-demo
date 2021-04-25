const express = require('express');
const router = express.Router();
const data_handler = require('./read_data')

router.route('/api/by_course_code/:qcode')
    .get(query_data)

function query_data(httpreq,httpres)
{
    let origin_data = data_handler.load_data()

    let qcode = httpreq.params.qcode.toUpperCase()

    if (!qcode) {
        httpres.status(200), httpres.json([]); return false
    }

    var out = [];

    if (qcode.length == 3) {
        origin_data.forEach(function (item,index) {
            let course_code = item.course_code.toUpperCase().substr(0,3);
            if (course_code == qcode) {
                out.push(item)
            }
        })
        httpres.status(200), httpres.json(out); return false
    } else {
        origin_data.forEach(function (item,index) {
            let course_code = item.course_code.toUpperCase()
            if (course_code == qcode) {
                out.push(item)
            }
        })
        httpres.status(200), httpres.json(out); return false
    }
}

module.exports = router;