var controller;
(function (controller) {
    var MainController = (function () {
        function MainController($scope, $state) {
            $scope.gotoRegister = function () {
                $state.transitionTo("member_register", {});
            };
        }
        return MainController;
    })();
    controller.MainController = MainController;
})(controller || (controller = {}));
//# sourceMappingURL=main.js.map
