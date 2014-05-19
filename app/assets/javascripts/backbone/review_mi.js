//= require_self
//= require_tree ./templates
//= require_tree ./models
//= require_tree ./collections
//= require_tree ./views
//= require_tree ./routers

_.templateSettings = {
  interpolate: /\{\{(.+?)\}\}/g
};

window.ReviewMi = {
  Models: {},
  Collections: {},
  Routers: {},
  Views: {}
};

$(document).ready(function () {
  //create and render the app view
  ReviewMi.appView = new ReviewMi.Views.appView();
  ReviewMi.appView.render();

  //instansiate the collections
  ReviewMi.reviews = new ReviewMi.Collections.Reviews();
  
  ReviewMi.contents = new ReviewMi.Collections.Contents();
  ReviewMi.movies = new ReviewMi.Collections.Movies();
  
  $.when(
    //fetch the 'review'
    ReviewMi.reviews.fetch(),

    //fetch the 'contents' (this includes fetching and parsing movies)
    ReviewMi.contents.fetch()

  ).then(function() {
    //start the backbone router
    ReviewMi.router = new ReviewMi.Routers.appRouter();
    Backbone.history.start({pushState: false});   

  });
});