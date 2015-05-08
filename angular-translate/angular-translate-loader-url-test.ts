/// <reference path="angular-translate.d.ts" />

import ngTranslate = require('angular-translate');
import ngTranslateLoader = require('angular-translate-loader-url');

var app = angular.module('at', ['pascalprecht.translate']);

app.config(($translateProvider: angular.translate.ITranslateProvider) => {
	$translateProvider.useUrlLoader('foo/bar.json');
	$translateProvider.preferredLanguage('en');
});
