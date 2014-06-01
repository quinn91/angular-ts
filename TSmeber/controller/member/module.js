/// <reference path="../../lib/types/angular/angular.d.ts"/>
var memberModule = angular.module("app.member");

memberModule.config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider.state("member_register", {
        url: "/member/register",
        views: {
            templateUrl: "views/member.register.html",
            controller: controller.MemberController
        }
    });
});
//# sourceMappingURL=module.js.map
