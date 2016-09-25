angular.module('dualListBoxMultiSelect', []);

angular.module('dualListBoxMultiSelect', [])
    .controller('dualListBoxMultiSelectController', ['$scope', '$http', function($scope, $http) {
        $scope.orderProp = 'id';
        $scope.selectedFrom = [];
        $scope.perSelectedFrom = [];
        $scope.selectedTo = [];

        $http.get('phones/phones.json')
            .then(function (response) {
                $scope.available = response.data;
            });

        $scope.move = function (from, selected, to) {
            angular.forEach(selected, function (item) {
                to.push(item);
                var index = from.indexOf(item);
                from.splice(index, 1)
            });
        };

        $scope.moveAll = function (from, to) {
            angular.forEach(from, function (item) {
                to.push(item);
            });
            from.length = 0;
        };
    }])
    .directive('dualListBoxSelect', function() {
        return {
            templateUrl: 'components/dual-listbox-multiselect/dual-listbox-multiselect.template.html'
        };
    });
