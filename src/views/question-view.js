(function () {

  MyApp.Views.QuestionView = Backbone.View.extend({
    initialize: function (options) {
      this.question = options.question;
    },

    render: function() {
      var newHtml = _.template($('.question').html(), this.question);
      $(this.el).html( newHtml );
    }
  });
})();
