/**
 * @fileoverview Lint files for Sketch plugins.
 * @author whybin
 */
'use strict';

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const requireIndex = require('requireindex');
const CocoaScript  = require(__dirname + '/processors/cocoascript.js');

//------------------------------------------------------------------------------
// Plugin Definition
//------------------------------------------------------------------------------

// import all rules in lib/rules
module.exports.rules = requireIndex(__dirname + '/rules');

// import processors
module.exports.processors = {
    '.js': CocoaScript
};
