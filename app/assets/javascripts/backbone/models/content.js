ReviewMi.Models.Content = Backbone.Model.extend({
  urlRoot: '/contents',

  parse: function (response) {
    //if the response media type is a movie
    if (response.media_type === "Movie") {
      //create a new movie model
      var movie = new ReviewMi.Models.Movie(response.media);
      //add this movie to the collection
      ReviewMi.movies.add(movie);
      //remove the media from the response
      delete response['media'];
    }
    return response;
  },

  // returns the media associated with the content
  media: function () {
    if (this.get('media_type') === "Movie") {
      var movie = ReviewMi.movies.get(this.get('media_id'));
      return movie;
    } else {
      return null;
    }
  }

});