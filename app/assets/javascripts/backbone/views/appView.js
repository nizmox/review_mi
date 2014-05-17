ReviewMi.Views.appView = Backbone.View.extend({
  el: '#app',

  initialize: function () {
    this.template = _.template($('#appView').html() );
    // this.$username = $('#username');
    // this.$password = $('#password');
  },

  render: function () {
    this.$el.html( this.template() );
  },

  events: {
    'click #login': 'login',
    'click #logout': 'logout'
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
        //update the ReviewMi currentUser variable
        ReviewMi.currentUser = data.username;
        // console.log(data.message);
      } else {
        //update the ReviewMi currentUser variable
        ReviewMi.currentUser = '';
        // console.log(data.message);
      }
    });
  },

  logout: function (event) {

    event.preventDefault();

    var request = $.ajax({
      type: 'DELETE',
      dataType: 'json',
      url: '/login'
    //what to do on success
    }).done(function (data) {
      // console.log(data);
      ReviewMi.currentUser = '';
    });

  }
});