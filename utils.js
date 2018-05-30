var util = require('util');

var utils = {
    createPxReplace : function(pixels, viewportSize, unitPrecision, viewportUnit) {
        return (pixels / viewportSize * 100).toFixed(unitPrecision) + viewportUnit;
    },

    getQueryString : function(query){
        if(!query) {
             return {};
        }
        if(typeof query !== "string" && typeof query !== 'object') {
    		util.error('query need use json type');
    		return {};
    	}
        if(typeof query === "string" && query.substr(0, 1) === "{" && query.substr(-1) === "}"){
            return JSON.parse(query);
        }else{
    		return query;
        }
    }
}

module.exports = utils;
