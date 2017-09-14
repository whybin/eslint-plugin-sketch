/**
 * @fileoverview Lint files for Sketch plugins.
 * @author whybin
 */
'use strict';

const requireIndex = require('requireindex');
const CocoaScript  = require(__dirname + '/processors/cocoascript.js');

module.exports.rules = requireIndex(__dirname + '/rules');

module.exports.processors = {
    '.js': CocoaScript
};
