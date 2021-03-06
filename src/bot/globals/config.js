var i18n = require('i18n');
module.exports = {
	lists: {
		PAYOUTTYPE: [
			[i18n._('Payout'), 'payout'],
			[i18n._('Stake'), 'stake']
		],
		CURRENCY: [
			['USD', 'USD'],
			['EUR', 'EUR'],
			['GBP', 'GBP'],
			['AUD', 'AUD']
		],
		DETAILS: [
			[i18n._('statement'), '1'],
			[i18n._('ask price'), '2'],
			[i18n._('payout'), '3'],
			[i18n._('profit'), '4'],
			[i18n._('contract type'), '5'],
			[i18n._('entry spot'), '6'],
			[i18n._('entry value'), '7'],
			[i18n._('exit spot'), '8'],
			[i18n._('exit value'), '9'],
			[i18n._('barrier'), '10'],
		],
		CHECK_RESULT: [
			[i18n._('Win'), 'win'],
			[i18n._('Loss'), 'loss'],
		],
		CHECK_DIRECTION: [
			[i18n._('Rise'), 'rise'],
			[i18n._('Fall'), 'fall'],
			[i18n._('No Change'), ''],
		],
	},

	opposites: {
		RISEFALL: [{
			'CALL': i18n._('Rise')
		}, {
			'PUT': i18n._('Fall')
		}],
		ASIANS: [{
			'ASIANU': i18n._('Asian Up')
		}, {
			'ASIAND': i18n._('Asian Down')
		}],
		MATCHESDIFFERS: [{
			'DIGITMATCH': i18n._('Matches')
		}, {
			'DIGITDIFF': i18n._('Differs')
		}],
		EVENODD: [{
			'DIGITEVEN': i18n._('Even')
		}, {
			'DIGITODD': i18n._('Odd')
		}],
		OVERUNDER: [{
			'DIGITOVER': i18n._('Over')
		}, {
			'DIGITUNDER': i18n._('Under')
		}],
	},
	opposites_have_barrier: [
		'MATCHESDIFFERS',
		'OVERUNDER',
	],
	conditionsCategory: {
		callput: ['risefall'],
		asian: ['asians'],
		digits: ['matchesdiffers', 'evenodd', 'overunder']
	},
	conditionsCategoryName: {
		callput: i18n._('Up/Down'),
		asian: i18n._('Asians'),
		digits: i18n._('Digits'),
	},
	conditions: ['risefall', 'asians', 'matchesdiffers', 'evenodd', 'overunder'],
};
