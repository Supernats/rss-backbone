NewReader.Views.FeedView = Backbone.View.extend({
  template: JST["feeds/show"],

  events: {
    "click button.refresh": "refresh"
  },

  render: function() {
    this.$el.empty();
    var temp = this.template({ feed: this.model });
    this.$el.append(temp);
    return this;
  },

  refresh: function(event) {
    this.model.get('entries').fetch({ success: this.render.bind(this) });
  }
});