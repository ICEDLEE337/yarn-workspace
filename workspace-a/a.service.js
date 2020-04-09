const {get} = require('lodash');
module.exports = function a () {
    return get(process, 'env.HOME');
};