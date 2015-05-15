hrApp.controller('Colors', ['$scope', function ($scope) {

    $scope.colors = [
        {
            "text" : "muted",
            "class" : "text-muted"
        },
        {
            "text" : "primary",
            "class" : "text-primary"
        },
        {
            "text" : "succes",
            "class" : "text-succes"
        },
        {
            "text" : "info",
            "class" : "text-info"
        },
        {
            "text" : "warning",
            "class" : "text-warning"
        },
        {
            "text" : "danger",
            "class" : "text-danger"
        }
    ];

    $scope.changeColor = function(){
        $scope.color = $scope.myColor.class;
    };

    $scope.searchText;
    $scope.orderByText;
}]);