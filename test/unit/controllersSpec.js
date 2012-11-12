'use strict';

/* jasmine specs for controllers go here */

describe('UpdateHomeOfficeController', function(){
  var scope,
  consultantId= '9999',
  routeParams = { consultantId: consultantId},
  getConsultantInfo,
  allOffices= [
    {country:'China', offices:['Beiijng', 'Chengdu', 'Xian', 'Shanghai']},
    {country:'Canada', offices:['bala', 'dfdf']}
  ];

  beforeEach(module('myApp.controllers'));

  beforeEach(inject(function($rootScope, $controller){
     getConsultantInfo = function(id, callback){
      if(id ==='9999') callback({first:'bowen',last:'you'});
     };

     scope = $rootScope.$new();
     var controller = $controller('UpdateHomeOfficeController',{
      $scope:scope,
      $routeParams:routeParams,
      getConsultantInfo:getConsultantInfo,
      allOffices:allOffices
     });

  }));


  it ('should show the list of countries where we have offices', function(){
    expect(scope.countryNames).toEqual(['Canada', 'China']);
  });

  if('shoulde show the list of offices when we select a country', function(){
    scope.selectedCountry = 'China',

    expect(scope.officeNames).toEqual(['Beijing','Chengdu','Xian','Shanghai']);
  });

});