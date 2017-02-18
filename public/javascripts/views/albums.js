var AlbumsView = Backbone.View.extend({
  template: Handlebars.compile($("[data-name=albums]").html()),
  el: '#albums',

  render: function() {
    this.$el.html(this.template({ albums: this.collection.toJSON() }));
  },

  initialize: function() {
    this.listenTo(this.collection, 'change', this.render);
  }
});