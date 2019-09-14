import 'mocha';

import assert from 'assert';

import { executionAsyncNode } from '../src/node';

describe('option', () => {
  const node = executionAsyncNode();
  it('sub node, parent should be node', async () => {
    let sub = executionAsyncNode()
    while (sub.parent) {
      sub = sub.parent
    }
    assert.equal(sub, node, 'equal')
  });
});
