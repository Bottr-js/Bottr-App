var Express = require('express')

module.exports = function() {
  return function(bot) {
    bot.router.use('/res', Express.static(__dirname + '/web/res'))
    bot.router.use('/', function(req, res) {
      res.sendFile(__dirname + '/web/index.html')
    })
  }
}
