Router.configure({
  layoutTemplate: 'basicLayout'
});

Router.route('/', {
  template: 'home',
  name: 'home',
  onBeforeAction: function(){
    GoogleMaps.load();
    this.next();
  }
});


Router.route('/initpage', {
  template: ('initpage')
});

Router.route('/piont', {
  template: 'piontDetails'
})