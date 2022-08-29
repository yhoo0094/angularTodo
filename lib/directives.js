//directies.js
//import angular from 'angular';

//기존 app 변수 대신 angular.module을 사용
angular.module('todo').directive('todoTitle', function(){
  return{
    template: '<h1>todo 만들기</h1>'
  }
});

angular.module('todo').directive('todoItem',function(){
  return{
    templateUrl: 'todoItem.tpl.html'
  }
});

angular.module('todo').directive('todoFilters',function(){
  return{
    templateUrl: 'todoFilters.tpl.html'
  }
});

angular.module('todo').directive('todoForm',function(){
  return{
    templateUrl: 'todoForm.tpl.html'
  }
});