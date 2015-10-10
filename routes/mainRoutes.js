Router.configure({
  layoutTemplate: 'basicLayout'
});

Router.route('/', {
  template: 'home',
  name: 'home'
});



Router.route('/initpage', function () {
  // layoutTemplate: 'simpleLayout',
  this.layout("simpleLayout"),
  this.render('initpage');
});