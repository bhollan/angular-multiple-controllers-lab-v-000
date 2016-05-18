function StaffController(){
  this.name = "wilma";
  this.email = "wilma@flintstones.io";
  this.phone = "987654";

}

angular
    .module('app')
    .controller('StaffController', StaffController);
