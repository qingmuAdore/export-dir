'use strict';

var assert = require('assert');

describe('mymodules', function () {

    var mymodules = require('./mymodules');

    it('should be imported correctly', function () {
        assert(mymodules, 'mymodules not defined');
    });

    it('should contain config.json data', function () {
        assert(mymodules.config);
        assert(mymodules.config.name, 'mymodules');
    });

    it('should contain first module', function () {
        assert(mymodules.first);
        assert(mymodules.first.getName);
        assert.equal(mymodules.first.getName(), 'first');
    });

    it('should contain second module', function () {
        assert(mymodules.second);
        assert(mymodules.second.getName);
        assert.equal(mymodules.second.getName(), 'second');
    });

    it('should contain third module', function () {
        assert(mymodules.third);
        assert(mymodules.third.getName);
        assert.equal(mymodules.third.getName(), 'third');
    });

    describe('mymodules.more', function () {

        it('should be imported correctly', function () {
            assert(mymodules.more);
        });

        it('excludeJSON option, should *not* contain config.json', function () {
            assert.ifError(mymodules.more.config);
        });

        it('should contain fourth module', function () {
            assert(mymodules.more.fourth);
            assert(mymodules.more.fourth.getName);
            assert.equal(mymodules.more.fourth.getName(), 'fourth');
        });

        it('should contain mymodules.third module', function () {
            assert(mymodules.more.fifth);
            assert(mymodules.more.fifth.getName);
            assert.equal(mymodules.more.fifth.getName(), 'fifth');
        });

    });

});
