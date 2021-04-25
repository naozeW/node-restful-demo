const express = require('express');
const router = express.Router();
const data_handler = require('./read_data')

router.route('/api/by_title/:qtitle')
    .get(query_data)

function query_data(httpreq,httpres)
{
    let origin_data = data_handler.load_data()

    let qtitle = httpreq.params.qtitle.toUpperCase()

    if (!qtitle) {
        httpres.status(200), httpres.json([]); return false
    }

    var out = [];

    let len = qtitle.length

    origin_data.forEach(function (item,index) {
        let title = item.title.toUpperCase().substr(0,len);
        if (title == qtitle) {
            out.push(item)
        }
    })
    httpres.status(200), httpres.json(out); return false
}

module.exports = router;