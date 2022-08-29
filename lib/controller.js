//controller.js
//import angular from 'angular';

angular.module('todo').controller('TodoCtrl', ['$scope', function($scope, todoStorage){   
  $scope.todos = todoStorage.get();
  


  //버튼에 ng-click 추가 후 핸들러 등록
  $scope.remove = function(todo){
    //todos 객체에서 todo의 index 찾기
    var idx = $scope.todos.findIndex(function(item){
      return item.id === todo.id;
    })

    //index찾았으면 해당 index의 todo 제거
    if(idx > -1){
      $scope.todos.splice(idx, 1);
    }
  };

  //추가 폼 동작 구현
  $scope.add = function(newTodoTitle){
    //newTodo 객체 만들기
    var newTodo = {
      title: newTodoTitle,
      complete: false,
      createdAt: Date.now()        
    };

    //newTodo 객체를 배열에 추가하기
    $scope.todos.push(newTodo);

    //input 태그 값 비워주기
    $scope.newTodoTitle = "";
  };
}]);