var app = new Vue({
  el: '#app',
  data: {
    newItem: '',
    todos: []
  },
  methods: {
    addItem: function(event) {
      if(this.newItem == '') return;

      var todo = {
        item: this.newItem,
        // タスク未完了の場合はfalse
        isDone: false
      };
      //配列todosに文字列（タスク）を追加
      this.todos.push(todo);
      //タスク追加後の文字列クリア
      this.newItem = ''
    },
    // タスクの削除
    deleteItem: function(index) {
      // alert(index);
      this.todos.splice(index, 1)
    }
  }
})