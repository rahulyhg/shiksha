// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services'])

  .run(function ($ionicPlatform, $ionicPopup) {
    $ionicPlatform.ready(function () {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      if (window.cordova && window.cordova.plugins.Keyboard) {
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        cordova.plugins.Keyboard.disableScroll(true);

      }
      if (window.StatusBar) {
        // org.apache.cordova.statusbar required
        StatusBar.styleDefault();
      }
      if (window.cordova) {
        if (cordova.platformId == 'android') {
          StatusBar.backgroundColorByHexString("#5418ff");
        }
      }
    });
    if (window.Connection) {
      if (navigator.connection.type == Connection.NONE) {
        $ionicPopup.confirm({
            title: "Internet Disconnected",
            content: "The internet is disconnected on your device."
          })
          .then(function (result) {
            if (!result) {
              ionic.Platform.exitApp();
            }
          });
      }
    }

  })



  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider

      .state('app', {
        url: '/app',
        abstract: true,
        templateUrl: 'templates/menu.html',
        controller: 'AppCtrl'
      })

      .state('app.home', {
        url: '/home',
        views: {
          'menuContent': {
            templateUrl: 'templates/home.html',
            controller: 'HomeCtrl'

          }
        }
      })
      .state('app.search', {
        url: '/search',
        views: {
          'menuContent': {
            templateUrl: 'templates/search.html',
            controller: 'SearchCtrl'
          }
        }
      })
      .state('app.photogallery', {
        url: '/photogallery',
        views: {
          'menuContent': {
            templateUrl: 'templates/photogallery.html',
            controller: 'PhotoGalleryCtrl'
          }
        }

      })

      .state('app.vendorlist', {
        url: '/vendorlist',
        views: {
          'menuContent': {
            templateUrl: 'templates/vendorlist.html',
            controller: 'VendorListCtrl'
          }
        }

      })

      .state('login', {
        url: '/login',
        templateUrl: 'templates/login.html',
        controller: 'LoginCtrl'
      })

      .state('app.state', {
        url: '/state',
        views: {
          'menuContent': {
            templateUrl: 'templates/state.html',
            controller: 'StateCtrl'
          }
        }
      })

      .state('app.institute', {
        url: '/institute',
        views: {
          'menuContent': {
            templateUrl: 'templates/institute.html',
            controller: 'InstituteCtrl'
          }
        }
      })

      .state('app.overview', {
        url: '/overview/:componentId',
        views: {
          'menuContent': {
            templateUrl: 'templates/overview.html',
            controller: 'OverviewCtrl'
          }
        }
      })

      .state('app.fundFlow', {
        url: '/fund-flow/:componentId',
        views: {
          'menuContent': {
            templateUrl: 'templates/fund-flow.html',
            controller: 'FundFlowCtrl'
          }
        }
      })

      .state('app.milestones', {
        url: '/milestones/:componentId',
        views: {
          'menuContent': {
            templateUrl: 'templates/milestones.html',
            controller: 'MilestonesCtrl'
          }
        }
      })

      .state('app.utilization', {
        url: '/utilization',
        views: {
          'menuContent': {
            templateUrl: 'templates/utilization.html',
            controller: 'UtilizationCtrl'
          }
        }
      })

      .state('app.projectPhotos', {
        url: '/project-photos/:componentId',
        views: {
          'menuContent': {
            templateUrl: 'templates/project-photos.html',
            controller: 'ProjectPhotosCtrl'
          }
        }
      });
    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/login');
  });
