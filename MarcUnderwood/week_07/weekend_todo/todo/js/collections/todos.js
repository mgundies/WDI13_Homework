// js/collections/todos.js

var app = app || {};

// Todo Collection
  // ---------------

  // The collection of todos is backed by *localStorage* instead of a remote
  // server.

  var TodoList = Backbone.Collection.extend({

    //Reference to this collection's model.
    model: app.Todo,

    // Save all of the todo items unde the "todos-backbone" namespace.
    localStorage: new Backbone.LocalStorage('todos-backbone'),

    // Filter down the list of all todo items that are finished
    completed: function(){
      return this.filter(function(todo){
        return todo.get('completed');
      });
    },

    // Filter down the list to items not finished
    remaining: function(){
      return this.without.apply( this, this.completed());
    },

    //We keep in seq order... below generates next-order-number
    nextOrder: function(){
      if (!this.length) {
        return 1;
      }
      return this.last().get('order') + 1;
    },

    // Todos are sorted by their original insertion order
    comparator: function(todo){
      return todo.get('order');
    }
  });

  // Create our global collection of **Todos**.
  app.Todos = new TodoList();
