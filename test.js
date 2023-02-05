/* eslint-env mocha */

const Promifire = require('./index');
const assert = require('assert');

describe('Promifire', () => {
    it('should execute promises in sequence', async () => {
        const p = new Promifire();
        p.add(Promise.resolve(1), 'one');
        p.add(Promise.resolve(2), 'two');
        const results = await p.sequence();
        assert.deepEqual(results, [[1, 'one'], [2, 'two']]);
    });

    it('should execute promises in parallel', async () => {
        const p = new Promifire();
        p.add(Promise.resolve(1), 'one');
        p.add(Promise.resolve(2), 'two');
        const results = await p.parallel();
        assert.deepEqual(results, [[1, 'one'], [2, 'two']]);
    });
});
