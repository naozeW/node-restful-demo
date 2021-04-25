const fs = require('fs');
var path = require('path')


function load_data() {
    let current_path = path.resolve(__dirname, '../data');
    let rawdata = fs.readFileSync(current_path + '/courses.json');
    return  JSON.parse(rawdata);
}

module.exports = {
    load_data
}