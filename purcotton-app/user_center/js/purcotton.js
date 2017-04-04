/**
 * Created by Administrator on 2017/3/30 0030.
 */
var app=angular.module("purcotton",['ionic']);
app.config(function($stateProvider,$urlRouterProvider,$ionicConfigProvider){
    $ionicConfigProvider.tabs.position("bottom");
    $stateProvider.state("user_center",{url:'/pur_user_center',templateUrl:'tpl/user_center.html'})
                    .state("mycart",{url:'/pur_mycart',templateUrl:'tpl/mycart.html'})
                    .state('main',{url:'/pur_main',templateUrl:'tpl/main.html'})
                    .state('category',{url:'/pur_category',templateUrl:'tpl/category.html'})
    $urlRouterProvider.otherwise('/pur_main')

});

app.controller('parentCtrl',['$scope','$state',function($scope,$state){
    $scope.jump=function(stateName,arg){
        $state.go(stateName,arg);
    }
}]);

