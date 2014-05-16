ReviewMi.Views.movieTitleView = Backbone.View.extend({
  el: '#main',
  initialize: function () {
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
    console.log("this doesn't work yet");
    //save this movie in the database
    this.model.save();
  }
});