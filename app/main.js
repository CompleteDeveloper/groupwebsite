'use strict'

const app = angular.module('app', ['ngRoute'])

app.config(function($routeProvider) {

	$routeProvider
	.when('/', {
		templateUrl: './views/home.html',
		controller: 'homeCtrl'
	})
	.otherwise({
		redirectTo: '/'
	})
})