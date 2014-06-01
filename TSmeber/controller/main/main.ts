module controller{
    export class MainController{
        constructor($scope: scope.IMainController, $state){
            $scope.gotoRegister = ()=>{
                $state.transitionTo("member_register", {});
            }
        }
    }
}