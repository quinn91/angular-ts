var backend;
(function (backend) {
    var RestService = (function () {
        function RestService($http) {
            this.http = $http;
        }
        RestService.prototype.post = function (url, headers, params, successcb, failcb) {
            var config = { headers: headers };
            this.http.post(url, JSON.stringify(params), config).success(function (data, status, headers) {
                successcb(data, status, headers);
            }).error(function (data, status) {
                if (failcb !== undefined && failcb !== null)
                    failcb(data, status);
            });
        };

        RestService.prototype.get = function (url, headers, params, successcb, failcb) {
            var config = { headers: headers };
            this.http.get(url + "?" + JSON.stringify(params), config).success(function (data, status, headers) {
                successcb(data, status, headers);
            }).error(function (data, status) {
                if (failcb !== undefined && failcb !== null)
                    failcb(data, status);
            });
        };
        return RestService;
    })();
    backend.RestService = RestService;
})(backend || (backend = {}));
//# sourceMappingURL=rest.js.map
