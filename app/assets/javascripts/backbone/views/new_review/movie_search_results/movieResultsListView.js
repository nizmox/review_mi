ReviewMi.Views.movieResultsListView = Backbone.View.extend({
  // el: '#results',
  tagName: 'ul',
  className: 'movies-list',
  initialize: function () {
    // store the location to output the ul to
    this.$result = $('#result');

    console.log(this.collection);
  },
  render: function () {
    console.log("have the best time, seriously!");
    
    //append to #results
    this.$result.html(this.el);

    this.collection.each(function(result){
      var view = new ReviewMi.Views.movieResultView({model: result});
      $('.movies-list').append(view.render().el);
    });
  }
});