module.exports = {
  resolveLoader: {
	},
	resolve: {
		alias: {
			tourist: 'tourist/tourist.js',
			config: path.join(__dirname, './src/globals/config'),
			globals: path.join(__dirname, './src/globals/globals'),
			version: path.join(__dirname, './src/globals/version'),
			introduction: path.join(__dirname, './src/tours/introduction'),
			welcome: path.join(__dirname, './src/tours/welcome'),
			conditions: path.join(__dirname, './src/trade/conditions'),
			markets: path.join(__dirname, './src/trade/markets'),
			trade: path.join(__dirname, './src/trade/trade'),
			translation: path.join(__dirname, './src/translation/translation'),
			i18n: path.join(__dirname, './src/translation/i18n'),
			relationChecker: path.join(__dirname, './src/utils/relationChecker'),
			storageManager: path.join(__dirname, './src/utils/storageManager'),
			utils: path.join(__dirname, './src/utils/utils'),
			draggable: path.join(__dirname, './src/view/draggable'),
			ui: path.join(__dirname, './src/view/ui'),
			view: path.join(__dirname, './src/view/view'),
		},
    root: "./node_modules",
  },
  entry: {
    bot: './src/bot',
    index: './src/index',
  },
  externals: {
    blockly: 'Blockly',
  },
  output: {
    filename: "[name].js",
  },
};

