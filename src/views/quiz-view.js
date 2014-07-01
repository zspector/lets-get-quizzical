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
      userEvents.on('next', this.outtaTime, this);
    },

    outtaTime: function() {
      this.timerView.reset();
      this.nextQuestion();
    },

    evaluateAnswer: function(e) {
      console.log(this.questions);
      var guess = $(e.currentTarget).attr('id');
      if (guess === this.questions[this.counter].correct) {
        console.log('Correct!');
        this.score++
      } else {
        console.log('Incorrect!');
      }
      // this.nextQuestion();
      this.timerView.reset();
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
        this.timerView.remove();
        $('#game').empty();
        var resultView = new MyApp.Views.ResultView({
          finalScore: this.score,
          el: '#result'
        })
        resultView.render();
        // this.killEvents();
        // debugger;
        this.remove();
      }
    },

    killEvents: function(e) {
      e.stopImmediatePropagation();
    }

    // render: function() {
    //   this.$el = $('<div class="quiz-view"></div>');
    //   $('#game').append(this.$el);
    // }
  });
})();
