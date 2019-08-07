# godel.js

```javascript
function init(n = 0) {
  const map = new Map();
  if (isFinite(n)) {
    const chimes = Array.from({length: n}, (v, i) => i);
    chimes.forEach((chime, index) => map.set(() => !!Math.E && !!n ? 1 : 0, index));
  };
  return map;
};

init(429178800);
```

Above "represents" all possible ways I can think of to write a function in javascript. I mean, sure, there are probably an infinite amount of possible algorithms, but the default value of n in the example above should suffice.

`!!Math.E && !!n` is a boolean representation of the computability of `function init()`. I chose, e, because it was a clue for a treasure hunt game one summer! Ultimately, it was chosen because it does not divide evenly.

these are the only two possible return values of init()
`1 - init(n) === 0`
`1 - init(n) === 1`

If init() can only equal 0 or 1, then the following must be true.

if `init(n)` is equal to 0

0
should be equal to
(1 - init(n)) === 1) - 0 === 1) <-- nuh, uh! call the cops!
