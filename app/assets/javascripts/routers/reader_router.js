NewReader.Routers.Feeds = Backbone.Router.extend({
  initialize: function ($rootEl, feeds) {
    this.$rootEl = $rootEl;
    this.feeds = feeds;
  },

  routes: {
    "": "index",
    "feeds/:id": "show",
    "users/new": "createUser"
    "session/new": "login"
  },

  index: function () {
    _noUser() && return;
    var view = new NewReader.Views.FeedsIndexView({ collection: this.feeds });
    this.$rootEl.html(view.render().$el);
  },

  show: function (id) {
    _noUser() && return;
    var feed = this.feeds.get(id);
    var view = new NewReader.Views.FeedView({ model: feed });
    this.$rootEl.html(view.render().$el);
  },

  createUser: function () {
    var view = new NewReader.Views.CreateUserView();
    this.$rootEl.html(view.render().$el);
  },

  _noUser: function() {
    if (!current_user){
      return true;
    } else {
      //send somewhere
      Backbone.history.navigate("sessions/new")
      return false;
    }
  },

  login: function() {
    var view = new NewReader.Views.LoginView();
    this.$rootEl.html(view.render().$el);
  }
});