NewReader.Views.NewSessionView = Backbone.View.extend({
  template: JST["sessions/new"],

  events: {
    "submit form.new-session": "login"
    "click a.new-user-link": "visitNewUser"
  },

  render: function() {
    this.$el.empty().append(this.template);
    return this;
  },

  visitNewUser: function() {
    Backbone.history.navigate("users/new", { trigger: true })
  },

  login: function(event) {
    event.preventDefault();
    var form = $(event.currentTarget);

    user.save({
      success: function(user) {
        Backbone.history.navigate("", { trigger: true });
      }
    });
  }
});