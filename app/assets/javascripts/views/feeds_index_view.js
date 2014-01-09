NewReader.Views.FeedsIndexView = Backbone.View.extend({
  template: JST["feeds/index"],

  events: {
    "click a.feed-link": "show"
  },

  render: function() {
    this.$el.empty();
    var temp = this.template({ feeds: this.collection });
    this.$el.append(temp);
    return this;
  },

  show: function(event) {
    event.preventDefault();
    var link = $(event.currentTarget);
    var feedId = link.attr("data-id");

  }
});