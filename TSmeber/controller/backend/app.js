/// <reference path="../../lib/types/angular/angular.d.ts"/>
var app = angular.module("app", ["app.member"]);

app.factory("memberService", function (RestService) {
    return new backend.MemberService(RestService);
});

app.config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider.state("main", {
        url: "/",
        views: {
            templateUrl: "views/main.html",
            controller: function () {
            }
        }
    });
});
//# sourceMappingURL=app.js.map
