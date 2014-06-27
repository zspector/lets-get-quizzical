(function(){

  MyApp.Views.StartGame = Backbone.View.extend({
    events: {
      'click .start-game': 'start'
    },
    el: '#start-game',

    start: function (e) {
      // var category = $(e.currentTarget).data('category');
      var category = e.currentTarget.getAttribute('data-category')

      e.preventDefault();
      $('#start-game').hide();

      var result = MyApp.createQuiz();
      if (result.success) {

        var quizView = new MyApp.Views.QuizView({
          questions: result.selectedQuestions
        });
      } else {
        console.log('error!');
      }
    }
  });

})();
