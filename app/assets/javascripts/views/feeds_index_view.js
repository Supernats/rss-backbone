NewReader.Views.FeedsIndexView = Backbone.View.extend({
  template: JST["feeds/index"],

  render: function() {
    this.$el.empty();
    var temp = this.template({ feeds: this.collection });
    this.$el.append(temp);
    return this;
  }
});