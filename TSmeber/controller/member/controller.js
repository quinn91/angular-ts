var controller;
(function (controller) {
    var MemberController = (function () {
        function MemberController($scope, memberService) {
            $scope.register = function () {
                memberService.register($scope.member.username, $scope.member.password, function (resp) {
                    $scope.memberRes = resp;
                });
            };
        }
        return MemberController;
    })();
    controller.MemberController = MemberController;
})(controller || (controller = {}));
//# sourceMappingURL=controller.js.map
