var utils = require('./utils');

module.exports = function (source) {
    if (!this.cacheable || !this.query) {
        return source;
    }
    this.cacheable();

    var query = Object.assign({},{
        viewportWidth: 750,
        viewportUnit: 'vw',
        minPixelValue:1,
        decimal:3
    },utils.getQueryString(this.query));

    var matchPXExp = /([0-9.]+px)([;,| |}|'|"\)\r|\n])/g;

    return source.replace(matchPXExp, function (match, m1, m2) {
        var pixels = parseFloat(m1.slice(0, m1.length - 2));
        if (pixels <= query.minPixelValue) {
            return match;
        }
        return utils.createPxReplace(pixels, query.viewportWidth, query.decimal, query.viewportUnit) + m2;
    });

};
