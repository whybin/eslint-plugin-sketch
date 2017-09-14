module.exports = {
    postprocess: function (messages, filename) {
        let ret = [];

        messages.forEach(msgs => {
            ret = ret.concat(msgs);
        });

        return ret;
    }
};
