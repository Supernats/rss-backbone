NewReader.Views.EntryView = Backbone.View.extend({
  template: JST["entries/show"],

  render: function() {
    this.$el.empty();
    var temp = this.template({ entry: this.model });
    this.$el.append(temp);
    return this;
  }
});