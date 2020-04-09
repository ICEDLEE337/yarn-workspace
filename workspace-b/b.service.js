const a = require('../workspace-a/a.service');
const { of } = require('rxjs');

module.exports = function b() {
    return a() || typeof of
};