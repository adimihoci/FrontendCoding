hrApp.controller('EmployeeEditController', ['$scope', '$http', '$routeParams', '$location', 'commonResourcesFactory'
    , function ($scope, $http, $routeParams, $location, $commonResourcesFactory) {
    $scope.requiredErrorMessage = "Please fill out this form!";
    $scope.patternDateNotRespectedMessage = "The date format should be yyyy-mm-dd";
    $scope.patternCommisionNotRespectedMessage = "Commission should be in the format 0.XX";

        //TODO#HR5

    $scope.employee = $http({url: $commonResourcesFactory.findOneEmployeeUrl + '/' + $routeParams.employeeId, method: 'GET'}).
            success(function (data, status, headers, config) {
                $scope.employee = data;
            });

    $scope.departments = $http({url: $commonResourcesFactory.findAllDepartmentsUrl, method: 'GET'}).
            success(function (data, status, headers, config) {
                $scope.departments = data;
            });

    $scope.jobs = $http({url: $commonResourcesFactory.findAllJobsUrl, method: 'GET'}).
            success(function (data, status, headers, config) {
                $scope.jobs = data;
            });

    $scope.managers = $http({url: $commonResourcesFactory.findAllEmployeesUrl, method: 'GET'}).
            success(function (data, status, headers, config) {
            $scope.managers = data;
            });
    /**
     * Reset form
     */
    $scope.reset = function () {
        $scope.employee = {};
    };

    /**
     * Persist an employee
     * @param addEmployee - employee to be persisted
     */
    $scope.create = function (addEmployee) {
        $http({url: $commonResourcesFactory.editEmployeeUrl, method: 'PUT', data:addEmployee}).
            success(function (data) {
                $scope.employee = data;
                $location.url('/employeeview/'+data.employeeId);
            });
    };

    $scope.deleteEmployee = function(employeeId) {
         $http({url: $commonResourcesFactory.findOneEmployeeUrl + '/' + $routeParams.employeeId, method: 'DELETE', data:employeeId}).
             success(function (data) {
                 $scope.employee = {};
             })
    }

    $scope.datePattern = /^\d{4}-\d{2}-\d{2}$/;
    $scope.commissionPattern =  /^[0]\.\d{1}(\d)?$/;

}]);