ReviewMi.Views.movieTitleView = Backbone.View.extend({
  el: '#main',
  initialize: function () {
    
    //unbind any existing event handlers
    $(this.el).undelegate('button', 'click');

    //fetch the template html
    this.template = _.template($('#movieTitleView').html() );
  },
  render: function () {
    //render the view in the #main elemetn
    this.$el.html(this.template(this.model.toJSON()));
  },
  events: {
    'click button': 'createReview'
  },
  createReview: function () {

    //if this is a new movie, then save it and add it to the collection
    if (this.model.isNew()) {
      console.log("this is not saved, so save it and add it to the movies collection")
      //save this movie in the database
      this.model.save();
      //add the movie to the collection
      ReviewMi.movies.add(this.model);
    }

    console.log('this should take you to a new review page');
  }
});