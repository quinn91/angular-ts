/// <reference path="../../config.ts"/>
var backend;
(function (backend) {
    "use strict";
    var MemberService = (function () {
        function MemberService(RestService) {
            this.url = common.Config.RestURL + "/member/register";
            this.api = RestService;
        }
        MemberService.prototype.register = function (username, password, callback) {
            var params = { username: username, password: password };
            this.api.post(this.url, {}, params, function (res) {
                if (res.success == true)
                    callback(res);
            });
        };
        return MemberService;
    })();
    backend.MemberService = MemberService;
})(backend || (backend = {}));
//# sourceMappingURL=backend.js.map
