/**
 * @author  youngwind
 */

const path = require('path');
module.exports = function (content) {
    let loaderSign = this.request.indexOf("!");
    let rawCss = this.request.substr(loaderSign);
    return "require(" + JSON.stringify(path.join(__dirname, 'addStyle')) + ")" +
        "(require(" + JSON.stringify(rawCss) + "))";
};