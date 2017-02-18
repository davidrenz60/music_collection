describe('Albums View', function() {
  beforeEach(function() {
    this.view = new AlbumsView({ collection: albums_scaffold });
  });

  it('should have a collection property assigned', function() {
    expect(this.view.collection).toBeDefined();
    expect(this.view.collection.length).toEqual(albums_scaffold.length);
  });

  it('should have a Handlebars template compiled', function() {
    expect(this.view.template).toBeDefined();
  });

  it('should render to an #albums container when render is called', function() {
    this.view.render();
    expect($('#albums li').length).toBe(albums_scaffold.length);
  });

  it('should re-render the view when the collection changes', function() {
    var model = albums_scaffold.findWhere({ 'title': '1989' });
    var originalHtml;
    var newHtml;

    this.view.render();
    originalHtml = $('#albums').html();
    model.set('title', 'Testing Title');
    newHtml = $('#albums').html();
    expect(originalHtml).not.toEqual(newHtml);
  });
});