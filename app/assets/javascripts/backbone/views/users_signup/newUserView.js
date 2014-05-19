ReviewMi.Views.newUserView = Backbone.View.extend({
  el: '#main',

  initialize: function () {
    //fetch the template html
    this.template = _.template($('#newUserView').html() );

    //if the user is already signed in, re-direct home
    if (ReviewMi.currentUser) {
      // redirect the user to the homepage
      this.redirectHome();
    }
  },

  render: function () {
    this.$el.html(this.template());
  },

  events: {
    'click #create-account': 'register'
  },

  register: function (event) {
    event.preventDefault();

    //maintain this using 'self'
    var self = this

    $.ajax({
      type: 'POST',
      dataType: 'json',
      url: '/users',
      data: {
        user: {
          email: $('#reg-email').val(),
          username: $('#reg-username').val(),
          password: $('#reg-password').val(),
          password_confirmation: $('#reg-password-conf').val()
        }
      }
    }).done(function(response) {
      if ( response.error ) {
        console.log("Error(s) occured, failed to signup ", response.errors);

        $errors = $('#errors');
        $errors.empty();

        _.each(response.errors, function (message,field) {
          // console.log(field + ': ',message.join(' AND '));
          $errors.append('<li>' + field + ': ' + message.join(' AND ') + '</li>');
        });

        //clear out the password fields
        $('#reg-password').val('');
        $('#reg-password-conf').val('');
      } else {
        ReviewMi.currentUser = response.username;
        // redirect the user to the homepage
        self.redirectHome();
      }

    });
  },

  redirectHome: function () {
    ReviewMi.router.navigate('/');
    ReviewMi.appView.render();
    ReviewMi.router.home();
  }
});