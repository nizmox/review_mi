ReviewMi.Views.loggedInView = Backbone.View.extend({
  el: '#user',

  initialize: function () {
    //unbind any existing event handlers
    $(this.el).undelegate('#logout', 'click');

    this.template = _.template($('#loggedInView').html() );
  },

  render: function () {
    this.$el.html( this.template() );
  },

  events: {
    'click #logout': 'logout'
  },

  logout: function (event) {

    event.preventDefault();

    var request = $.ajax({
      type: 'DELETE',
      dataType: 'json',
      url: '/login'
    //what to do on success
    }).done(function (data) {
      //set currentUser to blank
      ReviewMi.currentUser = '';
      //take the user back to the home page and re-render
      ReviewMi.router.navigate('/');
      ReviewMi.appView.render();
      //this is required as if you are already on the home page and you logout, the page does not re-render
      ReviewMi.router.home();
    });

  }
});