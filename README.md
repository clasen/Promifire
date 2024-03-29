# 👩‍🚒 Promifire

With Promifire, you can manage your promises with ease 🙌

You can execute your promises in sequence 🔥 or in parallel 💥
 
 ## 📦 Installation
```shell
npm install promifire
```

## 🔧 Usage
```js
const Promifire = require("promifire")

const pf = new Promifire();
const pLong = new Promise(ok => { setTimeout(() => { ok(1) }, 1500) });
const pShort = new Promise(ok => { setTimeout(() => { ok(3) }, 1000) });
pf.add(pLong, { id: "long" });
pf.add(pShort, { id: "short" });
```

### 💥 Parallel
```js
pf.parallel((x, i) => {
    console.log(x, i); // 3 { id: "short" }, 1 { id: "long" }
}).then(y => {
    console.log(y); // [[1, { id: "long" }], [3, { id: "short" }]]
});
```

### 🔥 Sequence
```js
pf.sequence((x, i) => {
    console.log(x, i); // 1 { id: "long" }, 3 { id: "short" }
}).then(y => {
    console.log(y); // [[1, { id: "long" }], [3, { id: "short" }]]
})
```

## 🤯 Features
- 🗜️ The smallest promise managers available in the market with less than 4kB
- 🎉 Passes the response and data to the callback function.
- 🔥 Executes the promises in sequence.
- 💥 Executes the promises in parallel.

## 🤔 Why Flow 
- 🕰️ Saves you time.
- 🧹 Keeps your code clean and organized.
- 🧠 Easy to use and understand.

## 🤝 Contributing
We welcome contributions to Promifire. If you have an idea or a bug to report, please open an issue. If you would like to contribute to the code, please open a pull request.

## 🎬 Conclusion
Promifire is the ultimate solution to manage your promises.

🔮 Try it out and see the magic.
## 📄 License
The MIT License (MIT)

Copyright (c) Martin Clasen

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

