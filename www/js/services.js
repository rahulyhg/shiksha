var adminurl = "http://192.168.0.02/api/";
// var adminurl = "http://rusabeta.wohlig.com/api/";//server
var imgpath = adminurl + "/uploads/";



angular.module('starter.services', [])
  .factory('MyServices', function($http) {
     return {

      //  getProjectReport: function(callback) {
      //   return $http({
      //     url: adminurl + 'Project/getProjectReport',
      //     method: "POST"
      //   }).success(callback);
      // },
         login: function(formData,callback) {
        return $http({
          url: adminurl + 'User/LoginUser',
          method: "POST",
           withCredentials: true,
          data: formData
        }).success(callback);
      },
       getProjectReport: function(formData,callback) {
        return $http({
          url: adminurl + 'Project/getProjectReport',
          method: "POST",
           withCredentials: true,
          data: formData
        }).success(callback);
      },
       componentFundflow: function(id,callback) {
         var data ={
           id : id
         }
        return $http({
          url: adminurl + 'Transaction/componentFundflow',
          method: "POST",
           withCredentials: true,
          data: data
        }).success(callback);
      },
       componentOverview : function(id,callback) {
         var data ={
           id : id
         }
        return $http({
          url: adminurl + 'Transaction/componentOverview',
          method: "POST",
           withCredentials: true,
          data: data
        }).success(callback);
      },
         getTransactionReport: function(formData,callback) {
        return $http({
          url: adminurl + 'Transaction/getTransactionReport',
          method: "POST",
           withCredentials: true,
          data: formData
        }).success(callback);
      },
       findAllPab: function(callback) {
        return $http({
          url: adminurl + 'Pab/findAllPab',
          method: "POST"
        }).success(callback);
      },
       findAllState: function(callback) {
        return $http({
          url: adminurl + 'State/findAllState',
          method: "POST"
        }).success(callback);
      },
       findAllComponents: function(callback) {
        return $http({
          url: adminurl + 'Components/findAllComponents',
          method: "POST"
        }).success(callback);
      },
       findAllInstituteDashBoard: function(callback) {
        return $http({
          url: adminurl + 'Institute/findAllInstituteDashBoard',
          method: "POST"
        }).success(callback);
      },
        getAllprojectOfComponent: function(componentId,callback) {
          var id ={
            id : componentId
          }
        return $http({
          url: adminurl + 'ProjectExpense/getAllprojectOfComponent',
          method: "POST",
           withCredentials: true,
          data: id
        }).success(callback);
      },


     };
  });
