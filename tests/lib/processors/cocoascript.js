const assert     = require('assert');
const { CLIEngine } = require('eslint');
let cli;

describe('CocoaScript', function () {
    before(function () {
        cli = new CLIEngine({
            useEslintrc: false
        });

        cli.addPlugin('eslint-plugin-sketch', {
            processors: {
                '.js': require(
                    __dirname + '/../../../lib/processors/cocoascript.js')
            }
        });
    });

    describe('#preprocess', function () {
        it('should replace @import directives', function () {
            const { errorCount, warningCount } =
                cli.executeOnText('@import "test";', 'test.js');

            assert.strictEqual(errorCount, 0);
            assert.strictEqual(warningCount, 0);
        });

        it('fails to replace inline @import if directive not at start of line', function () {
            const { results, errorCount, warningCount } =
                cli.executeOnText('var x; @import "test";', 'test.js');

            assert.strictEqual(errorCount, 1);
            assert.strictEqual(warningCount, 0);
            assert.strictEqual(results[0].messages[0].message,
                'Parsing error: Unexpected character \'@\'');
        });
    });
});
