// generates an <li> tag for a review
ReviewMi.Views.ReviewView = Backbone.View.extend({
  tagName: 'li',

  initialize: function () {
    this.template = _.template($('#reviewView').html() );
  },

  render: function () {
    var review = this.model;
    var content = this.model.content();

    var revDescTrunc = this.truncate( review.get('description'), 100);

    //build a new js object with parameters required for view template
    var tempObj = {
      content_id: content.get('id'),
      media_type: content.get('media_type'),
      title: content.get('title'),
      image: content.get('image'),
      rating: review.get('rating'),
      description: revDescTrunc,
      username: review.get('username'),
      created_at: moment(review.get('created_at')).format('D-MMM-YYYY h:mma')
    };

    this.$el.html(this.template(tempObj));

    return this;
  },

  events: {
    'click .review': 'showReview'
  },

  showReview: function () {
    //redirect you to the showReviewView
    ReviewMi.router.navigate('review/' + this.model.get('id'), true);
  },

  truncate: function (text, length) {
    var textArr = text.split(' ');
    var textTrunc = null;

    if (textArr.length > length) {
      textTrunc = textArr.slice(0,length).join(' ') + '... (see more)';
    } else {
      textTrunc = textArr.slice(0,length).join(' ');
    }

    return textTrunc;
  }
});