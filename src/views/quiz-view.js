(function () {
  MyApp.Views.QuizView = Backbone.View.extend({
    events: {
      'click .answer': 'evaluateAnswer'
    },

    initialize: function(options) {
      this.questions = options.questions;
      counter = 0;
      score = 0;
      // Initialize a bunch of question views
      this.questionView = new MyApp.Views.QuestionView({ question: this.questions[0] });
      // console.log("new view:", this.questionView);
      this.render();
      this.questionView.render();
      this.$el.append(this.questionView.el);
    },

    evaluateAnswer: function(e) {
      console.log(this.questions);
      var guess = $(e.currentTarget).attr('id');
      if (guess === this.questions[counter].correct) {
        console.log('Correct!');
        score++
      } else {
        console.log('Incorrect!');
      }
      this.nextQuestion();
    },

    nextQuestion: function() {
      // increase counter
      counter += 1;
      if (counter < 7) {
        // add next question, which will trigger questionView.render()
        this.questionView.question = this.questions[counter]
        // console.log(this.questionView.question);
        this.questionView.render();
      } else {
        // after 7 questions it resets
        counter = 0;
        $('#game').empty();
        this.remove();
        var resultView = new MyApp.Views.ResultView({
          finalScore: score,
          el: '#result'
        })
        resultView.render();
      }
    },

    render: function() {
      this.$el = $('<div class="quiz-view"></div>');
      $('#game').append(this.$el);
    }
  });
})();
