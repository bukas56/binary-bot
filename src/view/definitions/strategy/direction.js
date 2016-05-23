// https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#n3drko
var blockly = require('blockly');
var i18n = require('i18n');
var relationChecker = require('relationChecker');

blockly.Blocks.direction = {
  init: function() {
    this.appendDummyInput()
        .appendField(i18n._("Tick Direction"));
    this.setOutput(true, "String");
    this.setColour(180);
    this.setTooltip(i18n._('Returns the tick direction received by a strategy block, its value could be "up" if the tick is more than before, "down" if less than before and empty ("") if the tick is equal to the previous tick'));
    this.setHelpUrl('https://github.com/binary-com/binary-bot/wiki');
  },
	onchange: function(ev) {
		relationChecker.inside_strategy(this, ev, 'Tick Direction');
	},
};

