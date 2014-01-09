NewReader.Models.Feed = Backbone.Model.extend({
  urlRoot: "/feeds",

  parse: function (data) {
    var entries = data.entries;
    data.entries = new NewReader.Collections.Entries(entries);
    return data;
  },

  toJSON: function () {
    var data = _.clone(this.attributes);
    data.entries = this.get('entries').toJSON();
    return data;
  }
});