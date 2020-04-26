---
title: JavaScript - Closure and Variable Scope
timestamp: 4/30/2018
tag: JavaScript
---

# JavaScript: Closure and Variable Scope

## Closure

Closure is one of the best features of JavaScript. It is essentially a function inside another function where the inner function has the ability to expose its variables to the calls. Meaning it has access to all the variables defined outside of the function. Here is the simple example for a closure:

```js
function myClosure(text) {
    var message = "Hello ";
    function sayHello() {
        console.log(message + text);
    }
    sayHello();
}
myClosure("World");
```

In this case, the inner function `sayHello()` has the access to the variable defined in outer function `myClosure()`.

### Interesting Cases

#### Case I

There is a lot of resource online where you can find different usage of closure. It is a powerful tool. And here I am going to discuss some of the interesting cases along with variable scope that might cause some confusion to the beginners.

When a closure is in a for loop, it could be something which is not what you are expecting. For example:

```javascript
var items = {};

for (var i = 0; i < 5; i++) {
    items[i] = function getLabel() {
        console.log("Label: " + i)
    }
}

for (var j = 0; j < 5; j++) {
    items[j]();
}
```

So what does this code return? Obviously it is not "0, 1, 2, 3, 4", and instead, the output of the code is

```javascript
Label: 5
Label: 5
Label: 5
Label: 5
Label: 5
```

Why is that? It is because items is bound to outer-scope variable `i`, and `i` changes in each loop. After the loop, the value of `i` is updated to `5`. And this is the reason why the outputs are five 5s.

So how to get the output to be like "0, 1, 2, 3, 4"? Here we need to pass i as the parameter of the function instead of using it directly. This way this parameter will be made as the function's own local copy of the variable. As the result, the parameter can be passed to the function each time with current value through iteration. And it is where closure comes.

```javascript
var items = {};
for (var i = 0; i < 5; i++) {
    items[i] = getLabel(i);

    function getLabel(value){
        return function () {
            console.log("Label: " + value);
        }
    }
}

for (var j = 0; j < 5; j++) {
    items[j]();
}
```

Here we create an inner function `getLabel()` inside `items()`, and instead of using `i` directly, we pass the `value` as the inner function parameter. So here is the output:

```javascript
Label: 0
Label: 1
Label: 2
Label: 3
Label: 4
```

#### Case II

Here is another example of closure. And as far as I know, some companies use it as their interview questions.  Here is the code:

```javascript
for (var i = 0; i < 5; i++) {
    setTimeout (() => {
        console.log(i);
    }, 1000 * i)
}
```

So what do you expect it to do? The function `setTimeout()` has a callback function that is going to print out `i` on the console. And because of the async process in JavaScript and the situation we discussed above (that we are using `i` directly), the output will print out five 5s and one per second. Then how do we print out "0, 1, 2, 3, 4" with one number per second? Closure!

```javascript
for (var i = 0; i < 5; i++) {
    ((j) => {
        setTimeout (() => {
            console.log(j)
        }, 1000 * j)
    })(i)
}
```

Here we are using a self-invoke function that wraps the inner function up and passing the variable `i` as the parameter `j` in the loop. And we can get what we were expecting:

```javascript
// One number per second
0
1
2
3
4
```

#### Case III

For all the scenarios we talked above, in ES6(ECMAScript 6), the newest version of JavaScript, we can use `let` instead of `var` when we define the for loop. The `let` keyword is scoped differently than `var`. So taking the above for loop as an example, in each iteration, the loop will have a new `i` where each `i` is scoped inside the loop. With increment of `i`, the iteration updates `i`'s value in the function, and as the result we don't have to use closure to achieve the goal.

```javascript
for (let i = 0; i < 5; i++) {
    setTimeout (() => {
        console.log(i);
    }, 1000 * i)
}
```

And this code will give you the output of "0, 1, 2, 3, 4".

#### Note

Though closure is awesome, use it everywhere in your code might cause *memory leak*. We know that when one variable/object is not referenced, it will be reclaimed by the garbage collection mechanism. Closure will block the garbage collection when some variables/objects keep being referenced by the inner function, and they will be stored in memories. So when you finished using closure, release it.

```javascript
function myClosure(text) {
    var message = "Hello ";
    return function sayHello() {
        console.log(message + text);
    };
}
var myfunction = myClosure("World");
myfunction();
myfunction = null;
```
