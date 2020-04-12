
const uniq = require('lodash/uniq');
const BinaryTree = require('./binary');

const length = 1000000;
const testArr = [];
for (let i = 0; i < length; i++) {
  testArr[i] = Math.floor(Math.random() * length * 100);
}

function testTree(arr) {
  console.time('tree');
  let tree = new BinaryTree();
  for (let i = 0; i < arr.length; i++) {
    tree.add(arr[i]);
  }
  const res = tree.toArray();
  console.log(res.length);
  console.timeEnd('tree');
}

function testSet(arr) {
  console.time('set');
  const res = Array.from(new Set(arr)).sort((a, b) => a - b);
  console.log(res.length);
  console.timeEnd('set');
}

function testLodash(arr) {
  console.time('lodash');
  const res = uniq(arr).sort((a, b) => a - b);
  console.log(res.length);
  console.timeEnd('lodash');
}

testLodash([...testArr]);
testSet([...testArr]);
testTree([...testArr]);
