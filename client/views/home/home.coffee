Template.home.helpers
  pointsMapOptions: ()->
    if GoogleMaps.loaded()
      return {
        center: new google.maps.LatLng(49.4948, 24.0051)
        zoom: 8
      }

Template.home.onCreated ->
  this.markers = []
  instance = this
  points = Points.find().forEach (point) ->
    GoogleMaps.ready 'pointsMap', (map)->
      console.log map
      instance.markers.push new google.maps.Marker
        position: new google.maps.LatLng(point.position.lat,point.position.lng)
        map: map.instance