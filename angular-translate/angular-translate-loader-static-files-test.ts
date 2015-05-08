/// <reference path="angular-translate.d.ts" />

import ngTranslate = require('angular-translate');
import ngTranslateLoader = require('angular-translate-loader-static-files');

var app = angular.module('at', ['pascalprecht.translate']);

app.config(($translateProvider: angular.translate.ITranslateProvider) => {
	$translateProvider.useStaticFilesLoader({
		prefix: 'locale-',
		suffix: '.json'
	});
	$translateProvider.preferredLanguage('en');
});
