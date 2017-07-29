// Define the `phonecatApp` module
var app = angular.module('app', []);

// Define the `PhoneListController` controller on the `phonecatApp` module
app.controller('appController', ['$scope', '$compile', function($scope, $compile) {
    $scope.siteName = "Kranthi";
    $scope.menuList = [
        {
        name: 'Tour'
        }, {
        name: 'Explore'
        }, {
        name: 'XOOM™ Blog'
        }, {
        name: 'Pricing'
        }
    ];
    $scope.introDetails = {
        title: "Create Amazing Things",
        description: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics.",
        btntext: "See our work"
    }
    // Active menu item
    $scope.activeMenuItem = $scope.menuList[0];
    $scope.setActiveItem = function(menuActiveItem){
        $scope.activeMenuItem = menuActiveItem;
    };

    // var ele = angular.element('<div>"Hi"</div>');
    var target = $('body').find('.fh5co-cover-intro').eq(0);
    // target.append($compile(ele));

    target.append($compile("<div>'Hi'</div>")($scope));
}]);
