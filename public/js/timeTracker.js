window.TimeTracker = Ember.Application.create();  

TimeTracker.Router.map(function () {
	this.resource('timeTracker', { path: '/' });
});
