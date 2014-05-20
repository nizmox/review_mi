ReviewMi.Views.newReviewView = Backbone.View.extend({
  el: '#main',

  initialize: function () {

    //unbind any existing event handlers
    $(this.el).undelegate('form#newReview', 'submit');

    this.template = _.template($('#newReviewView').html() );
  },

  render: function () {
    this.$el.html( this.template( this.model.toJSON() ) );
    //swap out #stars divs with raty.js stars
    $('#stars').raty({ path: 'assets/raty', number: 10 });
  },

  events: {
    'submit form#newReview': 'submitReview'
  },

  submitReview: function(event) {
    //maintain this using self
    // var self = this;

    event.preventDefault();

    review = new ReviewMi.Models.Review({
      content_id: this.model.get('id'),
      rating: $('#stars').raty('score'),
      description: $('#review').val()
    });

    review.save().done(function(response) {

      if (response.error === undefined) {
        console.log('review saved successfully');
        ReviewMi.reviews.add(review);

        ReviewMi.router.navigate('review/' + review.get('id'), true);
      } else {
        console.log('review failed to save');
      }
    });

  }
});