ReviewMi.Views.newReview = Backbone.View.extend({
  el: '#main',

  initialize: function () {

    //unbind any existing event handlers
    $(this.el).undelegate('#submit', 'click');

    this.template = _.template($('#newReviewView').html() );
  },

  render: function () {
    this.$el.html( this.template( this.model.toJSON() ) );
    //swap out #stars divs with raty.js stars
    $('#stars').raty({ path: 'assets/raty', number: 10 });
  },

  events: {
    'click #submit': 'submitReview'
  },

  submitReview: function(event) {
    event.preventDefault();

    var request = $.ajax({
      type: 'POST',
      dataType: 'json',
      url: '/reviews',
      data: {
        review: {
          content_id: this.model.get('id'),
          rating: $('#stars').raty('score'),
          description: $('#review').val()
        }
      }
    }).done(function(response) {
      // create a new review model and add to the reviews collection
      var review = new ReviewMi.Models.Review(response.review);
      ReviewMi.reviews.add(review);

    });
  }
});