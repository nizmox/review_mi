ReviewMi.Models.Review = Backbone.Model.extend({
  urlRoot: '/reviews',

  content: function () {
    var content_id = this.get('content_id');
    return ReviewMi.contents.where({id: content_id })[0];
  }
});