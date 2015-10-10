ServiceConfiguration.configurations.remove({
  service: {
    $in: ['facebook', 'google']
  }
});

ServiceConfiguration.configurations.insert(Meteor.settings.facebookServiceConfig);
ServiceConfiguration.configurations.insert(Meteor.settings.googleServiceConfig);