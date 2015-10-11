@PointPost = new Mongo.Collection('point_posts');

PointPost.allow
  insert: (userId, doc) ->
    !!userId
  update: (userId, doc, fields, modifier) ->
    userId is doc.ownerId
  remove: (userId, doc) ->
    userId is doc.ownerId


PointPost.attachSchema new SimpleSchema
  text: 
    type: String
    optional: true
    autoform:
      type: 'textarea'

  queueLength:
    type: Number

  pointId:
    type: String
    label: 'Point id'
    autoform:
      type: 'hidden'
      label: false

  createdAt:
    type: Date,
    label: 'Created at',
    autoValue: ->
      if this.isInsert
        return new Date()
    autoform:
      type: 'hidden',
      label: false

  photoId:
    type: String,
    label: 'Photo file',
    optional: true,
    autoform:
      afFieldInput:
        type: "cfs-file",
        collection: "photos"