photoStore = new FS.Store.GridFS 'photoStore'

@Photos = new FS.Collection 'photos',
  stores: [photoStore],
  filter:
    allow:
      contentTypes: ['image/*']

Photos.allow
  insert: (userId, doc) ->
    true
  update: (userId, doc, fields, modifier) ->
    true
  remove: (userId, doc) ->
    userId is doc.ownerId
  download: () ->
    true
  