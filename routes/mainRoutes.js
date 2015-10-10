// Home Route
Router.route('/', {
  name: 'home',
  action: function () {
    this.render('home');
    SEO.set({ title: 'Home - ' + Meteor.App.NAME });
  }
});


Router.route('/initpage', function () {
  // layoutTemplate: 'simpleLayout',
  this.layout("simpleLayout"),
  this.render('initpage');
});