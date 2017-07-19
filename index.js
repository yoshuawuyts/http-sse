var assert = require('assert')

module.exports = HttpSse

function HttpSse (req, res) {
  assert.equal(typeof req, 'object', 'http-sse: req should be type object')
  assert.equal(typeof res, 'object', 'http-sse: res should be type object')

  if (req.headers['x-nginx']) res.setHeader('X-Accel-Buffering', 'no')
  res.setHeader('content-type', 'text/event-stream')

  this.req = req
  this.res = res
}

HttpSse.prototype.write = function (name, data) {
  assert.equal(typeof name, 'string', 'http-sse.write: name should be type string')
  assert.equal(typeof data, 'string', 'http-sse.write: data should be type string')
  var msg = this._msg(name, data)
  this.res.write(msg)
}

HttpSse.prototype.end = function (name, data) {
  if (name || data) {
    assert.equal(typeof name, 'string', 'http-sse.end: name should be type string')
    assert.equal(typeof data, 'string', 'http-sse.end: data should be type string')
    var msg = this._msg(name, data)
  }
  this.res.end(msg)
}

HttpSse.prototype._msg = function (name, data) {
  return 'event: ' + name + '\ndata: ' + data + '\n\n'
}
