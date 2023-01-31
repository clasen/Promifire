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
