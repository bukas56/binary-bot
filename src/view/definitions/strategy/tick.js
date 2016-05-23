// https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#2jo335

var blockly = require('blockly');
var relationChecker = require('relationChecker');
var i18n = require('i18n');

blockly.Blocks.tick = {
  init: function() {
    this.appendDummyInput()
        .appendField(i18n._("Tick Value"));
    this.setOutput(true, "Number");
    this.setColour(180);
    this.setTooltip(i18n._('Returns the tick value received by a strategy block'));
    this.setHelpUrl('https://github.com/binary-com/binary-bot/wiki');
  },
	onchange: function(ev) {
		relationChecker.inside_strategy(this, ev, 'Tick Value');
	},
};
