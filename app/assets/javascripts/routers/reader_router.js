NewReader.Routers.Feeds = Backbone.Router.extend({
  initialize: function ($rootEl, feeds) {
    this.$rootEl = $rootEl;
    this.feeds = feeds;
  },

  routes: {
    "": "index",
    "feeds/:id": "show"
  },

  index: function () {
    var view = new NewReader.Views.FeedsIndexView({ collection: this.feeds });
    this.$rootEl.html(view.render().$el);
  },

  show: function (id) {
    var feed = this.feeds.get(id);
    var view = new NewReader.Views.FeedView({ model: feed });
    this.$rootEl.html(view.render().$el);
  }
});