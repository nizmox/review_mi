ReviewMi.Routers.appRouter = Backbone.Router.extend({
  routes: {
    '': 'home',
    'review': 'newReview' //,
    // '*anything': 'goHome'
  },

  home: function () {
    ReviewMi.reviews = new ReviewMi.Collections.Reviews();
    ReviewMi.reviews.fetch().done(function(results) {
      // console.log(results);

      ReviewMi.homeView = new ReviewMi.Views.homeView({collection: ReviewMi.reviews});
      ReviewMi.homeView.render();
    });
  },

  newReview: function () {
    console.log('now at new review page');

    ReviewMi.newReviewView = new ReviewMi.Views.newReviewView();
    ReviewMi.newReviewView.render();
  },
  
  goHome: function () {
    document.location.hash = '';
  }
});