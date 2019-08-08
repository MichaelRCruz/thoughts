### godel.js

> UPDATE: I found an illustration [here](https://dvt.name/2018/03/12/godels-first-incompleteness-theorem-programmers/) to help.

>UPDATE: not leading to a firm conclusion; not ending doubt or dispute. As it stands, I think it's correct.


```javascript
function init(n = 0) {
  const map = new Map();
  if (isFinite(!isNaN(n))) {
    const chimes = Array.from({length: n}, (v, i) => i);
    chimes.forEach((chime, index) => map.set(() => n ? 1 : 0, index));
  };
  return map;
};

init(429178800);
// [Function] => 0, [Function] => 1, ..., [Function] => n
init(-1);
// Map {}
```

Above "represents" all possible ways I can think of to write a function in js. I mean, sure, there are probably an infinite amount of possibilities, but the example input of `n` should be enough.

With the above implementation, you have a system of well-defined rules and every single function that can return 0 or 1.

These are the only two possible return values from above function - `0` and `1`

If init(n) can only equal 0 or 1, then this is what I see.

axioms 🙄
```
n is a Real number
init(n) returns 0 or 1
1 - 0 = 1
1 - 1 = 0
```

0 should be equal to
`(1 - init(1)) === 1) - 0 === 1)` <-- nuh, uh! call the cops!
