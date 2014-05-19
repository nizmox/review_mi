ReviewMi.Collections.Reviews = Backbone.Collection.extend({
  url: '/reviews',
  model: ReviewMi.Models.Review,

  //sort reviews in created_at date order descending
  comparator: function(review) {
    return -Date.parse(review.get('created_at'));
  }
});