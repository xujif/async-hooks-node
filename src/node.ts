import * as async_hooks from 'async_hooks'

export type Node = {
  parent?: Node
  asyncId: number
}

const map = new Map<number, Node>();

async_hooks.createHook({
  destroy: (asyncId: number) => {
    map.delete(asyncId);
  },
  init: (asyncId: number, type: string, triggerAsyncId: number, resource: any) => {
    map.set(asyncId, { asyncId, parent: map.get(triggerAsyncId) })
  },
}).enable()

export function executionAsyncNode () {
  const asyncId = async_hooks.executionAsyncId();
  let node = map.get(asyncId);
  if (!node) {
    node = { asyncId }
    map.set(asyncId, node)
  }
  return node;
}
