[![NPM version][npm-image]][npm-url]
[![node version][node-image]][node-url]
[![npm download][download-image]][download-url]
[![npm license][license-image]][download-url]

## async hooks node
track async-hooks execution as linked-list.

### API
```typescript
// export type Node = {
//   parent?: Node
//   asyncId: number
// }

import { executionAsyncNode } from 'async-hooks-node';
const node1 = executionAsyncNode()

setTimeout(() => {
  const node2 = executionAsyncNode()
  // node2.parent == node1
}, 1);

```

it is easily to implement any thread-local like async-context with extending Node or using WeakMap.

[npm-image]: https://img.shields.io/npm/v/async-hooks-node.svg?style=flat-square
[npm-url]: https://npmjs.org/package/async-hooks-node
[travis-image]: https://img.shields.io/travis/https://github.com/xujif/async-hooks-node.svg?style=flat-square
[travis-url]: https://travis-ci.org/https://github.com/xujif/async-hooks-node
[coveralls-image]: https://img.shields.io/coveralls/https://github.com/xujif/async-hooks-node.svg?style=flat-square
[coveralls-url]: https://coveralls.io/r/https://github.com/xujif/async-hooks-node?branch=master
[david-image]: https://img.shields.io/david/https://github.com/xujif/async-hooks-node.svg?style=flat-square
[david-url]: https://david-dm.org/https://github.com/xujif/async-hooks-node
[node-image]: https://img.shields.io/badge/node.js-%3E=_8.6.0-green.svg?style=flat-square
[node-url]: http://nodejs.org/download/
[download-image]: https://img.shields.io/npm/dm/async-hooks-node.svg?style=flat-square
[download-url]: https://npmjs.org/package/async-hooks-node
[license-image]: https://img.shields.io/npm/l/async-hooks-node.svg
