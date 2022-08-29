angular.module('todo').factory('todoStorage', function(){
  var storage = {
    //todo 객체 배열로 만들기
    todos = [
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
    ],

    get: function(){
        return storage.todos;
    }
  }

  return storage;
});