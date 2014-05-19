ReviewMi.Views.movieTitleView = Backbone.View.extend({
  el: '#main',

  initialize: function () {
    
    //unbind any existing event handlers
    $(this.el).undelegate('button', 'click');

    //fetch the template html
    this.template = _.template($('#movieTitleView').html() );
  },

  render: function () {
    // generate 'data' needed to render template (includes movie + content data)
    var data = this.model.toJSON();

    var content = this.model.content();
    data.title = content.get('title');
    data.image = content.get('image');

    //render the view in the #main element
    this.$el.html(this.template(data));
  },

  events: {
    'click button': 'createReview'
  },

  createReview: function () {
    //from the movie model, find hte content and content's id
    var id = this.model.content().get('id');
    ReviewMi.router.navigate('review/' + id, true);
  }
});