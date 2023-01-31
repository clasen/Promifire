# Promifire 👩‍🚒

The ultimate class to manage your promises 💪.

 With Promifire, you can manage your promises with ease 🙌. You can execute your promises in sequence 🔥 or in parallel 💥.
 
 ## Installation 📦
`
npm install promifire
`

## Usage 🔧
`
const pf = new Promifire();
pf.add(new Promise((resolve, reject) => { setTimeout(() => { resolve(1) }, 1500) }), 2);
pf.add(new Promise((resolve, reject) => { setTimeout(() => { resolve(3) }, 1000) }), 4);
`

### Parallel 💥
`
pf.parallel((x, i) => {
    console.log(x, i); // 3 4, 1 2
}).then(x => {
    console.log(x); // [[1, 2], [3, 4]]
});
`

### Sequence 🔥
`
pf.sequence((x, i) => {
    console.log(x, i); // 1 2, 3 4
}).then(x => {
    console.log(x); // [[1, 2], [3, 4]]
})
`

## Features 🎉
- Passes the response and data to the callback function 🎉.

- Executes the promises in sequence 🔥
- Executes the promises in parallel 💥
- Adds promises to the Promifire 💪

## Why Flow 🤔
- Saves you time 🕰️
- Keeps your code clean and organized 🧹
- Easy to use and understand 🧠

## Contributing 🤝
We welcome contributions to Promifire. If you have an idea or a bug to report, please open an issue. If you would like to contribute to the code, please open a pull request.

## License 📄
Flow is licensed under the MIT License.

## Conclusion 🎬
Promifire is the ultimate solution to manage your promises.
Try it out and see the magic 🔮