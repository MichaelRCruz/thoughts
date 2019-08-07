### godel.js

> UPDATE: so the constant you see is for sure hand waving, but the idea still remains. I have to better represent all possible computable values and find time to make it look better. I found an idea based on another devs implementation that I will for sure reference to try to make this function sound. As it
stands, I think it's correct.


```javascript
function init(n = 0) {
  const map = new Map();
  if (isFinite(n)) {
    const chimes = Array.from({length: n}, (v, i) => i);
    chimes.forEach((chime, index) => map.set(() => !!Math.E && !!n ? 1 : 0, index));
  };
  return map;
};

init(429178800); // 1
init(-1); // 0
```

Above "represents" all possible ways I can think of to write a function in javascript. I mean, sure, there are probably an infinite amount of possible algorithms, but the default value of n in the example above should suffice. With the above implementation, you have a system of well-defined rules and every single function that can return 0 or 1.

`!!Math.E && !!n` is a boolean representation of the computability of `function init()`. I chose, e, because it was cute and it was a hint for a treasure hunt one summer, lol.

These are the only two possible return values of the above function - 0 and 1

If the function can only equal 0 or 1, then the following must be true.

axioms, haha
```
n is either positive or negative and must be a Real number
init(n) returns 0 or 1
1 - 0 = 1
1 - 1 = 0
```

0 should be equal to
(1 - init(1)) === 1) - 0 === 1) <-- nuh, uh! call the cops!
