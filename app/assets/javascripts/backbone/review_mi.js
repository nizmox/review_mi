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
  
  //instansiate the movies collection
  ReviewMi.movies = new ReviewMi.Collections.Movies();

  //fetch all the content in the database
  ReviewMi.contents = new ReviewMi.Collections.Contents();
  ReviewMi.contents.fetch().done(function() {
    // start the backbone router
    ReviewMi.router = new ReviewMi.Routers.appRouter();
    Backbone.history.start({pushState: false});    
  });
});

