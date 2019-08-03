_...after reading please note that it's the result of momentary inspiration with zero research or background in mathematics and science.

# 0. Asymptotic State and Flag Notation (whatever you want to call it for now)

> The best way I can get my thoughts down regarding approach is through recollection of a friendly walk-and-talk for some outdoor coffee. My friend, a very bright engineer, politely listened as I babbled.

### `f(x) = 1/x`

_Any_ piece of software, simple or complex, designed to compute state requires time to run the process.

Given any level of complexity, you will have an initial `input`, a resulting `state`, and the combination thereof casually called a `lifecycle`. If integer 5 is computed with a result of integer 10, then integer 5 represents the input, integer 10 represents the state, and the computing process it took to arrive to the result is the lifecycle.

Assumptions & Requirements
* The resulting state of any lifecycle, barring the last, is the initial state of the subsequent lifecycle.
* A sequence of n, where n =/= 0 || n != 1, lifecycle units represent faultless operation of the software.
* `input = n*5`
* `state = input + (n*5)`

```
a ~ (10+0+1) ~~~~ o
o ~ (10+0+1) ~~~~ o
o ~ (10+10+0+1) ~ o
o ~ (20+0+1) ~~~~ o
o ~ (1) ~~~~~~~~~ o
a ~ (0+1) ~~~~~~~ z
```

It's okay to think of any integer 5 (base ten for simplicity) as a symbol representing the simplest data structure available in this environment. In fact, consider the next graphic depicting any application's very first lifecycle except we've dramatically increased the complexity a bit on the initial state – a classic example being authentication.

```
a ~ (20+1) ~ z
```

At this point, I want to depict the next concept by destructuring the states into smaller structures for further visualization and more explanation after.

```
a ~ (20+5+0+1) ~~~~~ o
o ~ (10+10+10+0+1) ~ o
. . .
o ~ (2+2+2+0+1) ~~~~ z
```

Notice how the last lifecycle listed contains only symbols `2, 0, 1`. Each supposed data structure has been contracted down by a mathematical factor of five which we'll consider the base unit in this little thought experiment. Remember this is just an illustration. :)

> The anti-pattern here being a product of 5 distributed back through the lifecycle which serves no purpose other than to reinforce the symbolism and notation.

#### `0` and `1`
The last detail on the contraction is the `0` and `1`. These each will represent null state and error state respectively. The symbol, `1`, was chosen because it represents "half-baked" state or _nearly_ no state at all, but ultimately has value and meaning despite the name error.

#### "Errors" do not exist and they are not real
For this thought experiment, let me explain why "errors" are not erroneous by nature. This type of state is still declaritive whereby its mere existence is enough to declare something and for anything listening to act (I'll get into this idea of "respawning" but not sure yet if I want to use that word). In fact you could casually, yet theoretically, claim that this "error" is like a catalyst. It is able to, for example, initiate _only one_ lifecycle namely it's own to accomplish _only one_ goal: to contract or reduce state and therefore bring "error" closer to zero. This rounds out the definition of "error".

#### "Errors" are state that can be tracked and measured with an asymptote. The only concept erroneous in nature is the data itself

![image asymptote](https://en.wikipedia.org/wiki/File:Hyperbola_one_over_x.svg)

"Errors" in this thought experiment are not erroneous because they are just state with asymptotic qualities and therefore make them the key and pivotal role in the software and the only state that can autonomously manage a piece of software without human interaction.

> Human interaction is only possible between lifecycles as it is impossible to realistically effect a change in the middle of a lifecycle.
"Errors" _can_ in real time effect a change during a lifecycle

The only, subjectively, desirable quality of "errors" here are to actually manage the _lifecycles_ of the application. This concept closes the loop from initial state to finality.

###### _silicon_ rule :)
If that is true then the next rule is that "errors" may not effect a change to any gradationally superior lifecycle, i.e., state only flows from the top down.

Apply the previous technique to each base unit in any lifecycle and you will see that it is possible for any base unit to error or any null state to be null state. Either way, it takes _at least_ one of these to exist to transition through the containing lifecycle.

```
a ~ (5+5+5+0+1) ~~~~~~~~ o
o ~ (10+10+10+0+5+0+1) ~ o
. . .
o ~ (2+2+2+0+1+0+1) ~~~~ z
```


###### rules cont...
> a base unit, `5`, cannot be null by nature.
> and `0` (null) cannot be `1` error by nature.
> contractions can only exist through the factor of five thing.

Consider three side-by-side-by-side comparisons of a set of contracted lifecyles with a bit of null state and error state mixed in by law.

```
a ~ (10+0+1) ~ o
a ~ (15+0+1) ~ o
a ~ (20+0+1) ~ o
a ~ (20+0+1) ~ o
```

Applying the factor of five rule reduces our state into the following notation.

```
a ~ (0+1/5) ~~~ z
z ~ (2+0+1/5) ~ z
z ~ (3+0+1/5) ~ z
z ~ (4+0+1/5) ~ o
```

After reduction we are left with an incremental notation that represents three key important rules.

###### rules cont...
> null will always be zero
> error will always exponentially approach zero and therefore always exist
> null may or may not exist, but for the preparation of null in all lifecycles is the last of these three rules

Remember that bit I said about the base state can never be null? Well, that was not _entirely_ true. If you're still with me, then things are about to get weird so please check this out as I attempt arrive to my point.

We can destrucutre a lifecycle into functional based lifecycles indefinitely.

```
a ~ (0+1/50) ~~~~ x
x ~ (20+0+1/50) ~ x
x ~ (30+0+1/50) ~ x
x ~ (40+0+1/50) ~ z
```

Now what you see above is a pretty straightforward way to represent some sort of meta-like substate "gauging" up or "gauging" down the scope.

`a`, `x`, `z` all symbolize time in a linear fashion form `a` to `z` likewise for `x` and `o` but as intermediate states with x being within any incremental gauge that can only factor up and factor down by 10.


Next, I will explore how to apply this thinking to a fully nested application including details on authentication strategy lifecycles maybe hopefully

TODO: stuff
