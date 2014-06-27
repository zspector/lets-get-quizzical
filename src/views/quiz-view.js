(function () {
  window.QuizView = Backbone.View.extend({
    events: {
      'click .answer': 'nextQuestion'
    },
    initialize: function() {
      this.listenTo(this.collection, 'add', this.onQuestionAdd);
    },
    onQuestionAdd: function(newQuestion) {
      var questionView = new QuestionView({model: newQuestion});
      questionView.render();
      $(this.el).append(questionView.el);
    },
    nextQuestion: function() {
      // empty game template
      $('#game').empty();
      // increase counter
      var counter = this.collection.counter += 1;
      if (counter < 7) {
        // add next question, which will trigger questionView.render()
        this.collection.add(questionBank[counter])
      } else {
        // after 7 questions it resets
        this.collection.counter = 0;
        $('#start-game').show();
      }
    }
  });
})();
