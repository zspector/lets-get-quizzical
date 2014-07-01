(function () {

  MyApp.Views.QuestionView = Backbone.View.extend({
    initialize: function (options) {
      this.question = options.question;
      // this.timer = 10;
      // setTimeout(this.countdown, 1000);
    },

    // countdown: function() {
    //   if (this.timer > 0) {
    //     this.timer -= 1;
    //     setTimeout(this.countdown, 1000);
    //   }
    // },

    render: function() {
      var newHtml = _.template($('.question').html(), this.question);
      $(this.el).html( newHtml );
    }
  });
})();
