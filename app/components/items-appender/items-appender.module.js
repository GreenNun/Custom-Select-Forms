angular.module('itemsAppender', []);

angular.module('itemsAppender', [])
    .controller('itemsAppenderController', ['$scope', '$http', function ($scope, $http) {

        $http.get('phones/phones.json')
            .then(function (response) {
                $scope.available = response.data;
            });

        $scope.add = function () {
            $scope.available.push({
                "age": 0,
                "id": "test",
                "imageUrl": "test",
                "name": "test",
                "snippet": "test"
            });
        };
    }])
    .directive('parametersAppender', function () {
        return {
            templateUrl: 'components/items-appender/items-appender.template.html'
        };
    });