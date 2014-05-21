ReviewMi.Views.loggedOutView = Backbone.View.extend({
  el: '#user',

  initialize: function () {
    //unbind any existing event handlers
    $(this.el).undelegate('#login', 'submit');
    
    this.template = _.template($('#loggedOutView').html() );
  },

  render: function () {
    this.$el.html( this.template() );
  },

  events: {
    'submit #login': 'login'
  },

  login: function (event) {
    var username = $('#username').val();
    var password = $('#password').val();

    console.log('username: ', username, 'password :', password);

    event.preventDefault();

    var request = $.ajax({
      type: 'POST',
      dataType: 'json',
      url: '/login',
      data: { 
        username: username,
        password: password
      }
    //what to do on success
    }).done(function (data) {
      if (data.success === true) {

        //perform javascript login
        session.login(data.username);

        //change view to logged out
        var view = new ReviewMi.Views.loggedInView();
        view.render();
      } else {

        //perform javascript logout
        session.loginout();
      }
    });
  }
});