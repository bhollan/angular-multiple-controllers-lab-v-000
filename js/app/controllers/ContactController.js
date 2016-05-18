function ContactController(){
  this.name = "fred";
  this.email = "fred@flintstones.io";
  this.phone = "23456789";

  var vm = this;

  this.changeName = function(){
    vm.name = "Something else!";
  }
}

angular
    .module('app')
    .controller('ContactController', ContactController)
