# ๐ฉโ๐ Promifire

With Promifire, you can manage your promises with ease ๐

You can execute your promises in sequence ๐ฅ or in parallel ๐ฅ
 
 ## ๐ฆ Installation
```shell
npm install promifire
```

## ๐ง Usage
```js
const Promifire = require("promifire")

const pf = new Promifire();
const pLong = new Promise(ok => { setTimeout(() => { ok(1) }, 1500) });
const pShort = new Promise(ok => { setTimeout(() => { ok(3) }, 1000) });
pf.add(pLong, { id: "long" });
pf.add(pShort, { id: "short" });
```

### ๐ฅ Parallel
```js
pf.parallel((x, i) => {
    console.log(x, i); // 3 { id: "short" }, 1 { id: "long" }
}).then(y => {
    console.log(y); // [[1, { id: "long" }], [3, { id: "short" }]]
});
```

### ๐ฅ Sequence
```js
pf.sequence((x, i) => {
    console.log(x, i); // 1 { id: "long" }, 3 { id: "short" }
}).then(y => {
    console.log(y); // [[1, { id: "long" }], [3, { id: "short" }]]
})
```

## ๐คฏ Features
- ๐๏ธ The smallest promise managers available in the market with less than 4kB
- ๐ Passes the response and data to the callback function.
- ๐ฅ Executes the promises in sequence.
- ๐ฅ Executes the promises in parallel.

## ๐ค Why Flow 
- ๐ฐ๏ธ Saves you time.
- ๐งน Keeps your code clean and organized.
- ๐ง  Easy to use and understand.

## ๐ค Contributing
We welcome contributions to Promifire. If you have an idea or a bug to report, please open an issue. If you would like to contribute to the code, please open a pull request.

## ๐ฌ Conclusion
Promifire is the ultimate solution to manage your promises.

๐ฎ Try it out and see the magic.
## ๐ License
The MIT License (MIT)

Copyright (c) Martin Clasen

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

