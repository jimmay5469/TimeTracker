window.Todos = Ember.Application.create();  

Todos.Router.map(function () {
	this.resource('todos', { path: '/' });
});
