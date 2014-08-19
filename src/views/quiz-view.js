(function () {
  MyApp.Views.QuizView = Backbone.View.extend({
    className: 'quiz-view',
    events: {
      'click .answer': 'evaluateAnswer'
    },

    initialize: function(options) {
      this.questions = options.questions;
      this.counter = 0;
      this.questionView = new MyApp.Views.QuestionView({ question: this.questions[0] });
      this.scoreView = new MyApp.Views.ScoreView();
      // Render timer and begin countdown
      window.MyApp.Instances.timer.render();
      window.MyApp.Instances.timer.countdown();
      $('#timer').append(window.MyApp.Instances.timer.el);
      // Render first question
      this.questionView.render();
      this.$el.append(this.questionView.el);
      // Render score view
      this.$el.append(this.scoreView.el);
      this.listenTo(userEvents, 'next', this.evaluateAnswer);
    },

    evaluateAnswer: function(e) {
      if (e) {
        console.log(this.questions);
        var guess = $(e.currentTarget).attr('id');
        var target = $(e.currentTarget)
        if (guess === this.questions[this.counter].correct) {
          console.log('Correct!');
          target.toggleClass('btn-success');
          this.scoreView.score += window.MyApp.Instances.timer.timer * 10;
          this.scoreView.render();
        } else {
          console.log('Incorrect!');
          target.toggleClass('btn-danger');
        }
      } else {
        console.log('Incorrect because time ran out');
        target = $('.answer');
        target.toggleClass('btn-danger')
      }
      window.MyApp.Instances.timer.timerPause();
      this.disableClick();
      var that = this
      setTimeout(function(){
        $('.question-container').hide('slide', {direction:'left'},1000);
      }, 500);
      setTimeout(function(){
        target.toggleClass('btn-default');
        that.enableClick();
        that.nextQuestion();
      }, 1500);
    },

    nextQuestion: function() {
      // increase counter
      this.counter += 1;
      if (this.counter < 7) {
        window.MyApp.Instances.timer.timerStartTime();
        console.log(this.counter);
        // add next question, which will trigger questionView.render()
        this.questionView.question = this.questions[this.counter]
        this.questionView.render();
        $('.question-container').hide();
        $('.question-container').show('slide', {direction:'right'},1000);
        setTimeout(function(){
          window.MyApp.Instances.timer.timerReset();
        }, 1000);
      } else {
        // after 7 questions it resets
        this.counter = 0;
        window.MyApp.Instances.timer.destroyCountdown();
        $('#game').empty();
        MyApp.Instances.resultView.scopedScore(this.scoreView.score);
        MyApp.Instances.resultView.render(this.scoreView.score);
        $('.toggle-hide, .timer-row').hide();
        $('.result-container').hide();
        $('.title, .result-row').show();
        $('.result-container').fadeIn('slow');
        this.scoreView.remove();
        this.stopListening();
        this.undelegateEvents();
        this.unbind();
        this.remove();
        Backbone.View.prototype.remove.call(this);
      }
    },

    disableClick: function() {
      this.events["click .answer"] = undefined;
      this.delegateEvents(this.events);
    },

    enableClick: function() {
      this.events["click .answer"] = "evaluateAnswer";
      this.delegateEvents(this.events);
    }

  });
})();
