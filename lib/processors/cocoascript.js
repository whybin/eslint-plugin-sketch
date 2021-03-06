const defaults = require(__dirname + '/default.js');

module.exports = {
    preprocess: function (text) {
        return [ text.replace(/(^|\n)\s*@import +.+/g, '$1') ];
    },

    postprocess: defaults.postprocess
};
