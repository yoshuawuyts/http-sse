# http-sse [![stability][0]][1]
[![npm version][2]][3] [![build status][4]][5]
[![downloads][8]][9] [![js-standard-style][10]][11]

Create server-sent-events

## Usage
```js
var Sse = require('http-sse')
var http = require('http')

http.createServer(function (req, res) {
  var sse = Sse(req, res)
  sse.write('foo', 'bar')
  sse.write('bin', 'baz')
  sse.end('beep', 'boop')
})
```

## API
### `sse = Sse(req, res)`
Create a new SSE instance.

### `sse.write(name, data)`
Write a new message to the SSE stream.

### `sse.end([name], [data])`
Close the SSE stream.

## See Also
- https://developer.mozilla.org/en-US/docs/Web/API/Server-sent_events

## License
[MIT](https://tldrlegal.com/license/mit-license)

[0]: https://img.shields.io/badge/stability-experimental-orange.svg?style=flat-square
[1]: https://nodejs.org/api/documentation.html#documentation_stability_index
[2]: https://img.shields.io/npm/v/http-sse.svg?style=flat-square
[3]: https://npmjs.org/package/http-sse
[4]: https://img.shields.io/travis/yoshuawuyts/http-sse/master.svg?style=flat-square
[5]: https://travis-ci.org/yoshuawuyts/http-sse
[6]: https://img.shields.io/codecov/c/github/yoshuawuyts/http-sse/master.svg?style=flat-square
[7]: https://codecov.io/github/yoshuawuyts/http-sse
[8]: http://img.shields.io/npm/dm/http-sse.svg?style=flat-square
[9]: https://npmjs.org/package/http-sse
[10]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square
[11]: https://github.com/feross/standard
