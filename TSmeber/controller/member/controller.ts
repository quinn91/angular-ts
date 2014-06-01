module controller{
    export class MemberController{
        constructor($scope: scope.IMemberScope, memberService: backend.MemberService){
            $scope.register = () => {
                memberService.register($scope.member.username, $scope.member.password, function(resp){
                    $scope.memberRes = resp;
                });
            }
        }
        
    }
}