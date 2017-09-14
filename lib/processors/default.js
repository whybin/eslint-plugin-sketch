module.exports = {
    postprocess: function (messages) {
        let ret = [];

        messages.forEach(msgs => {
            ret = ret.concat(msgs);
        });

        return ret;
    }
};
