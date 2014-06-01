 module backend {
    export interface IRestService{
        post(url: string, headers: any, params: any, successcb: any, failcb?: any);
        get(url: string, headers: any, params: any, successcb: any, failcb?: any)
    }

    export class RestService implements IRestService{
        http;
        constructor($http){
            this.http = $http;
        }
        post(url: string, headers: any, params: any, successcb: any, failcb?: any) {
            var config: any = { headers: headers};
            this.http.post(url, JSON.stringify(params), config)
                .success(function (data, status, headers) {
                    successcb(data, status, headers);
                })
                .error(function (data, status) {
                    if (failcb !== undefined && failcb !== null)
                        failcb(data, status);
                });
        }

        get(url: string, headers: any, params: any, successcb: any, failcb?: any) {
            var config: any = { headers: headers};
            this.http.get(url + "?" + JSON.stringify(params), config)
                .success(function (data, status, headers) {
                    successcb(data, status, headers);
                })
                .error(function (data, status) {
                    if (failcb !== undefined && failcb !== null)
                        failcb(data, status);
                });
        }
    }
}