@Points = new Mongo.Collection('points');

Points.allow
  insert: (userId, doc) ->
    !!userId
  update: (userId, doc, fields, modifier) ->
    userId is doc.ownerId
  remove: (userId, doc) ->
    userId is doc.ownerId


Points.attachSchema new SimpleSchema
  name: 
    type: String

  position:
    type: Object,
    optional: true,
    blackbox: true

