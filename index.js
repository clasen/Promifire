class Promifire {
    constructor() {
        this.promises = [];
    }

    add(promise, data) {
        this.promises.push([promise, data]);
    }

    async sequence(fn = null) {
        let results = [];
        for (const [promise, data] of this.promises) {
            results.push(await promise.then(response => {
                if (fn) fn(response, data);
                return [response, data];
            }));
        }
        return results;
    }

    async parallel(fn = null) {
        const promises = this.promises.map(([promise, data]) => promise.then(response => {
            if (fn) fn(response, data);
            return [response, data];
        }))

        return Promise.all(promises);
    }
}

module.exports = Promifire

// const ps = new Promifire();
// ps.add(new Promise((resolve, reject) => { setTimeout(() => { resolve(1) }, 1500) }), 2);
// ps.add(new Promise((resolve, reject) => { setTimeout(() => { resolve(3) }, 1000) }), 4);

// ps.parallel((x, i) => {
//     console.log(x, i); // 3 4, 1 2
// }).then(x => {
//     console.log(x); // [[1, 2], [3, 4]]
// });

// ps.sequence((x, i) => {
//     console.log(x, i); // 1 2, 3 4
// }).then(x => {
//     console.log(x); // [[1, 2], [3, 4]]
// })
