NewReader.Collections.Entries = Backbone.Collection.extend({
  model: NewReader.Models.Entry,
  url: "/feeds/:id/entries"
});