ReviewMi.Views.showReview = Backbone.View.extend({
  el: '#main',

  initialize: function () {
    //set the content object for this view (associated with a review)
    this.content = this.model.content();

    this.template = _.template($('#showReviewView').html() );

    console.log(this.template);
  },

  render: function () {
    // generate 'data' needed to render template (includes movie + content data)
    var data = this.model.toJSON();

    data.title = this.content.get('title');
    data.image = this.content.get('image');

    console.log(data);

    this.$el.html(this.template(data));
  }
});