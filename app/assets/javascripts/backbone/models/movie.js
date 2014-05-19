ReviewMi.Models.Movie = Backbone.Model.extend({
  urlRoot: '/movies',

  // returns the content associated with this movie
  content: function () {
    var id = this.get('id');
    return ReviewMi.contents.where({media_type: "Movie", media_id: id })[0];
  }
});