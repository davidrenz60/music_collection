var $overlay = $('#overlay');
var TracksView = Backbone.View.extend({
  attributes: {
    id: 'tracks_modal',
  },
  duration: 300,
  template: Handlebars.compile($("[data-name=tracks]").html()),

  events: {
    "click a.close": 'close',
  },

  render: function() {
    this.$el.html(this.template({
      tracks: this.collection.toJSON(),
      album: this.album,
    }));

    this.open();
  },

  fadeOut: function() {
    $overlay.fadeOut(this.duration);
    this.$el.fadeOut(this.duration, function() {
      this.remove();
    }.bind(this));
  },

  open: function() {
    this.$el.add($overlay).fadeIn(this.duration);
  },

  close: function(e) {
    e.preventDefault();
    this.fadeOut();
    history.back();
  },

  initialize: function(options) {
    this.album = options.album;
    this.$el.appendTo(document.body);
  }
});