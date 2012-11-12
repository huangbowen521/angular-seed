'use strict';

/* Controllers */


	angular.module('myApp.controllers', []).controller('MyCtrl1', function($scope){
	
	$scope.msg= "this is the message";
	
	$scope.showAlert = function(msg){
		alert(msg);
	};
}).controller('UpdateHomeOfficeController',
function ($scope, $routeParams, getConsultantInfo, allOffices){
	getConsultantInfo($routeParams.consultantId, function (consultant){
		$scope.fullname = consultant.last + ' ' + consultant.first;
	});

	$scope.countryNames = [];
	angular.forEach(allOffices, function(office){
		$scope.countryNames.push(office.country);
	});
	$scope.countryNames.sort();

	$scope.$watch('selectedCountry', function(value){
		angular.forEach(allOffices, function(country){
			if (country.country === value){
				$scope.officeNames = country.offices;
				$scope.officeNames.sort();			}
		});
	});
});