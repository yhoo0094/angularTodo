console.log("실행");

//import angular from 'angular';

angular.module('todo',[]); //todo라는 모듈을 정의

angular.module('todo').controller('TodoCtrl', ['$scope', function($scope){   
  
  //todo 객체 배열로 만들기
  $scope.todos = [
    {
      title: '요가수련',
      complete: false,
      createdAt: Date.now()
    },
    {
      title: '앵귤러 학습',
      complete: false,
      createdAt: Date.now()
    },
    {
      title: '운동',
      complete: true,
      createdAt: Date.now()
    }      
  ]

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

angular.module('todo').directive('todoTitle', function(){
  return{
    template: '<h1>todo 만들기</h1>'
  }
});

angular.module('todo').directive('todoItem',function(){
  return{
	  template: 
    	'<date>날짜: {{todo.createdAt | date : "yyyy-MM-dd"}}</date>'
    	+'<div class="input-group mb-3">'
    	+'<div class="input-group-text">'
    	+'<input class="form-check-input mt-0" type="checkbox" value="" aria-label="Checkbox for following text input" ng-model="todo.complete">'
    	+'</div>'
    	+'<input type="text" class="form-control" aria-label="Text input with checkbox" ng-model="todo.title">'
    	+'<button class="btn btn-danger" type="button" id="button-addon2" ng-click="remove(todo)">삭제</button>'
    	+'</div>'
  }
});

angular.module('todo').directive('todoFilters',function(){
  return{
	  template: 
    	'<button class="btn btn-primary" ng-click="statusFilter={}">전체</button>&nbsp;'
    	+'<button class="btn btn-primary" ng-click="statusFilter={complete:true}">완료</button>&nbsp;'
    	+'<button class="btn btn-primary" ng-click="statusFilter={complete:false}">미완료</button>'
  }
});

angular.module('todo').directive('todoForm',function(){
  return{
	  template: 
    	
    	'<form name="todoForm" ng-submit="add(newTodoTitle)">'
    		+'<div class="input-group">'
    		+'<input type="text"class="form-control" ng-model="newTodoTitle" placeholder="새로운 할 일을 입력하세요." minlength="3">'
    		+'<span class="input-group-btn">'
    		+'<button class="btn btn-success" type="submit">추가</button>'
    		+'</span>'
    		+'</div>'
    		+'<!--ng-show를 이용해 경고 문구 보이기/숨기기-->'
  			+'<div ng-show="todoForm.$dirty && todoForm.$invalid">'
  			+'<div class="alert alert-warning" role="alert">3글자 이상 입력하세요.</div>'
  			+'</div>'
  			+'</form>'
    	
  }
});