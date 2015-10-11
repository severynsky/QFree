Router.configure({
  layoutTemplate: 'basicLayout'
});

Router.route('/', {
  template: 'home',
  name: 'home'
});


Router.route('/initpage', {
  template: ('initpage')
});

Router.route('/piont', {
  template: 'piontDetails'
})