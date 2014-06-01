/// <reference path="../../config.ts"/>
module backend{
    "use strict"
    export class MemberService{
        private api: backend.IRestService;
        private url = common.Config.RestURL + "/member/register";
        constructor(RestService){
            this.api = RestService;
        }

        register(username:string, password: string, callback){
            var params = {username: username, password: password}
            this.api.post(this.url, {}, params, function(res){
                if (res.success == true)
                callback(res);
            });
        }
    }
}