ReviewMi.Views.newReview = Backbone.View.extend({
  el: '#main',

  initialize: function () {
    this.template = _.template($('#newReviewView').html() );
  },

  render: function () {
    this.$el.html( this.template( this.model.toJSON() ) );
    //swap out #stars divs with raty.js stars
    $('#stars').raty({ path: 'assets/raty', number: 10 });

    // get the score "$('#stars').raty('score');"
  },

  events: {
    'click #submit': 'submitReview'
  },

  submitReview: function(event) {
    event.preventDefault();

    console.log("this doesn\'t work yet");

    var request = $.ajax({
      type: 'POST',
      dataType: 'json',
      url: '/reviews',
      data: {
        // review: {
        //   type: 'movie',
        //   title: this.model.get('title'),
        //   rating: $('#stars').raty('score'),
        //   description: $('#review').val()
        // }
      }
    }).done()
  }
});