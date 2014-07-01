(function () {
  MyApp.Views.QuizView = Backbone.View.extend({
    className: 'quiz-view',
    events: {
      'click .answer': 'evaluateAnswer'
    },

    initialize: function(options) {
      this.questions = options.questions;
      this.counter = 0;
      this.score = 0;
      // Initialize a bunch of question views
      this.timerView = new MyApp.Views.TimerView();
      this.questionView = new MyApp.Views.QuestionView({ question: this.questions[0] });
      // console.log("new view:", this.questionView);
      // this.render();
      this.timerView.render();
      this.timerView.countdown();
      this.$el.append(this.timerView.el);

      this.questionView.render();
      this.$el.append(this.questionView.el);
      this.listenTo(userEvents, 'next', this.evaluateAnswer);
    },

    evaluateAnswer: function(e) {
      if (e) {
        console.log(this.questions);
        var guess = $(e.currentTarget).attr('id');
        if (guess === this.questions[this.counter].correct) {
          console.log('Correct!');
          this.score += this.timerView.timer * 100
        } else {
          console.log('Incorrect!');
        }
      } else {
        console.log('Incorrect because time ran out');
      }
      this.timerView.timerReset();
      this.nextQuestion();
    },

    // timerReset: function() {
    //   // this.timerView.remove();
    //   // var timerView = new MyApp.Views.TimerView();
    //   this.timerView.timer = 11;
    //   this.nextQuestion();
    // },

    nextQuestion: function() {
      // increase counter
      this.counter += 1;
      if (this.counter < 7) {
        console.log(this.counter);
        // add next question, which will trigger questionView.render()
        this.questionView.question = this.questions[this.counter]
        this.questionView.render();
      } else {
        // after 7 questions it resets
        this.counter = 0;
        this.timerView.destroyCountdown();
        // this.timerView.remove();
        $('#game').empty();
        var resultView = new MyApp.Views.ResultView({
          finalScore: this.score,
          el: '#result'
        })
        this.stopListening();
        resultView.render();
        this.undelegateEvents();
        this.unbind();
        this.remove();
        Backbone.View.prototype.remove.call(this);
      }
    },

    // render: function() {
    //   this.$el = $('<div class="quiz-view"></div>');
    //   $('#game').append(this.$el);
    // }
  });
})();
