Bot = {};
var translation = require('translation'); // must be on top
var i18n = require('i18n');
var $ = require('jquery');
$.ajaxSetup({
	cache: false
});
window.$ = window.jQuery = $;
window.Backbone = require('backbone');
window._ = require('underscore');
require('notifyjs-browser');
require('tourist');

translation.addBlocklyTranslation();
translation.Translator(function () {
	Bot.config = require('config');
	Bot.globals = require('globals');
	Bot.utils = require('utils');
	Bot.version = require('version');
	Bot.conditions = require('conditions');
	Bot.markets = require('markets');
	Bot.trade = require('trade');
	Bot.toggleDebug = require('globals')
		.toggleDebug;
	require('ui');
	$('[data-i18n-text]')
		.each(function () {
			$(this)
				.text(i18n._($(this)
					.attr('data-i18n-text')));
		});
});
