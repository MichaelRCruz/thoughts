### godel.js

> UPDATE: The `!!Math.E && !!n` crap is _for sure_ hand waving, but the idea still remains. I threw `!!n` in there out of habbit because no type system. I found an illustration [here](https://dvt.name/2018/03/12/godels-first-incompleteness-theorem-programmers/) to help.
As it stands, I think it's correct.


```javascript
function init(n = 0) {
  // map preserves the order of insertion
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map#Parameters
  const map = new Map();
  if (isFinite(n)) {
    const chimes = Array.from({length: n}, (v, i) => i);
    chimes.forEach((chime, index) => map.set(!!Math.E && !!n ? 1 : 0, index));
  };
  return map;
};

init(429178800); // 1
init(-1); // 0
```

Above "represents" all possible ways I can think of to write a function in js. I mean, sure, there are probably an infinite amount of possibilities, but the example input of `n` should be enough.

With the above implementation, you have a system of well-defined rules and every single function that can return 0 or 1.

Consider `!!Math.E && !!n` as a boolean representation of the computability of `chime`. It either is or it isn't.

I chose, e, because it's cute and it was a hint for a treasure hunt one summer in Wisconsin.

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
(1 - init(1)) === 1) - 0 === 1) <-- nuh, uh! call the cops!
