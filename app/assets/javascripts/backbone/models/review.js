ReviewMi.Models.Review = Backbone.Model.extend({
  urlRoot: '/reviews',

  parse: function (response) {
    //reformat and flatten response to include username
    response.username = response.user.username;
    delete response['user'];

    return response;
  },

  content: function () {
    var content_id = this.get('content_id');
    return ReviewMi.contents.where({id: content_id })[0];
  }
});