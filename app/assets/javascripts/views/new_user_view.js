NewReader.Views.NewUserView = Backbone.View.extend({
  template: JST["users/new"],

  events: {
    "submit form.new-user": "createUser"
  },

  render: function() {
    this.$el.empty().append(this.template);
    return this;
  },

  createUser: function(event) {
    event.preventDefault();
    var form = $(event.currentTarget);
    var user = new User(form[:params]);

    user.save({
      success: function(user) {
        Backbone.history.navigate("", { trigger: true });
      }
    });
  }
});