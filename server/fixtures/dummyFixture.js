// The "||" notation doesn't work yet
Fixtures = typeof Fixtures !== "undefined" ? Fixtures : {};

Fixtures.dummyFixture = [
  { 'foo' : 'bar', 'another' : 'value' },
  { 'foo' : 'bar2', 'another' : 'value2' }
];

var points = [
  {
    name: 'Point 1',
    position: {
      lat: 50.274854, 
      lng: 23.589525
    }
  },
  {
    name: 'Point 1',
    position: {
      lat: 50.096653,
      lng: 23.279140
    }
  }
]

Meteor.startup(function(){
  if(!Points.find().count()){
    for (p in points) {
      Points.insert(points[p]);
    }
  }
})
