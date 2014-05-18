ReviewMi.Views.movieTitleView = Backbone.View.extend({
  el: '#main',

  initialize: function () {
    
    //unbind any existing event handlers
    $(this.el).undelegate('button', 'click');

    //fetch the template html
    this.template = _.template($('#movieTitleView').html() );
  },

  render: function () {
    //render the view in the #main element
    this.$el.html(this.template(this.model.toJSON()));
  },

  events: {
    'click button': 'createReview'
  },

  createReview: function () {

    //if this is a new movie, then save it and add it to the collection
    if (this.model.isNew()) {
      console.log("this is not saved, so save it and add it to the movies collection");
      //add the movie to the collection
      ReviewMi.movies.add(this.model);
      //save this movie in the database
      var self = this;
      this.model.save().done(function (response) {

        //the save returns the content created also
        //create a new content model with the response data and add it to the collection
        var content = new ReviewMi.Models.Content(response.content);
        ReviewMi.contents.add(content);
        console.log('content: ',content);

        self.redirect();
      });
    //this is not a new movie, so redirect immediately
    } else {
      console.log("this movie is already saved, so no need to save it");
      this.redirect();
    }

  },

  redirect: function () {
    //from the movie model, find hte content and content's id
    var id = this.model.content().get('id');
    ReviewMi.router.navigate('review/' + id, true);
  }
});