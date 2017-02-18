jQuery.fx.off = true;

describe('Tracks View', function() {
  var album = albums_scaffold.findWhere({ title: '1989' });
  beforeEach(function() {
    this.view = new TracksView({ collection: tracks_scaffold, album: album });
  });

  afterEach(function() {
    this.view.remove();
  });

  it('has a collection property assigned', function() {
    expect(this.view.collection).toBeDefined();
    expect(this.view.template).toBeDefined();
  });

  it('has a Handlebars template assigned', function() {
    expect(this.view.template).toBeDefined();
  });

  it('renders a modal to the body when render is called', function() {
    this.view.render();
    expect($('#tracks_modal li').length).toBe(tracks_scaffold.length);
  });

  it('removes the view when fadeOut is called', function() {
    this.view.fadeOut();
    expect($('#tracks_modal').length).toBe(0);
  });
});