/// <reference path="models.ts"/>

module scope{
    "use strict"
    export interface IMemberScope extends ng.IScope{
        member: models.Member;
        memberRes: any;
        register();
    }
}