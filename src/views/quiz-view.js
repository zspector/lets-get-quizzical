(function () {
  MyApp.Views.QuizView = Backbone.View.extend({
    events: {
      'click .answer': 'nextQuestion'
    },
    initialize: function(options) {
      this.questions = options.questions;
      counter = 0;
      // Initialize a bunch of question views
      this.questionView = new MyApp.Views.QuestionView({ question: this.questions[0] });
      // console.log("new view:", this.questionView);
      this.render();
      this.questionView.render();
      this.$el.append(this.questionView.el);
    },
    nextQuestion: function() {
      // this.questionView.question = // something new
      // this.questionView.render()
      // increase counter
      counter += 1;
      if (counter < 7) {
        // add next question, which will trigger questionView.render()
        console.log(counter);
        console.log(this.questions);
        this.questionView.question = this.questions[counter]
        // console.log(this.questionView.question);
        this.questionView.render();
      } else {
        // after 7 questions it resets
        counter = 0;
        // this.questions = [];
        $('#game').empty();
        $('#start-game').show();
        this.remove();
      }
    },
    render: function() {
      this.$el = $('<div class="quiz-view"></div>');
      $('#game').append(this.$el);
    }
  });
})();
