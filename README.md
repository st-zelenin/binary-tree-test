# binary tree test

### input:
an array of `1.000.000` random integers between `0` to `100.000.000`

### output:
sorted array of uniq values

### task:
to find the fastest way among
1. a custom binary tree
2. `Set` + `Array.prototype.sort()`
3. `lodash/uniq`+ `Array.prototype.sort()`

### results:
- `p.1` (the custom binary tree) is ~30% slower then others
- no significant difference between `p.2` and `p.3`