/// <reference path="angular-translate.d.ts" />

import ngTranslate = require('angular-translate');
import ngTranslateLoader = require('angular-translate-loader-partial');

var app = angular.module('at', ['pascalprecht.translate']);

app.config(($translateProvider: angular.translate.ITranslateProvider) => {
	$translateProvider.useLoader('$translatePartialLoader', {
		urlTemplate: '/i18n/{part}/{lang}.json'
	});
	$translateProvider.preferredLanguage('en');
});
