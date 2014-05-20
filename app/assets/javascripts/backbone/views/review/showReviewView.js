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

    //reformat the date using moment.js
    data.created_at = moment(data.created_at).format('D-MMM-YYYY h:mma');

    //add data from 'content' model
    data.title = this.content.get('title');
    data.image = this.content.get('image');

    this.$el.html(this.template(data));
  }
});