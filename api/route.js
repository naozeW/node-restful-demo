const by_course_code = require('./by_course_code')
const by_instructor = require('./by_instructor')
const by_level = require('./by_level')
const by_title = require('./by_title')
const combined_query = require('./combined_query')


module.exports = (app) => {
    app.use(by_course_code)
    app.use(by_instructor)
    app.use(by_level)
    app.use(by_title)
    app.use(combined_query)
}