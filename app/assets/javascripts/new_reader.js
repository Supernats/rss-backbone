window.NewReader = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    var feeds = new NewReader.Collections.Feeds();
    var that = this;
    feeds.fetch({
      success: function() {
        new NewReader.Routers.Feeds( $('#content'), feeds );
        Backbone.history.start();
      }
    });
  }
};

$(document).ready(function() {
  NewReader.initialize();
});
