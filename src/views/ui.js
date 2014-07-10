(function(){

  MyApp.Views.Category = Backbone.View.extend({
    initialize: function(options) {
      this.category = options.category;
    },

    el: '#high-scores',

    render: function() {
      var newHtml = _.template($('.category').html(), {category: this.category});
      $('#start-game').append(newHtml);
    }
  });

  MyApp.Views.StartGame = Backbone.View.extend({
    events: {
      'click .category-button': 'start'
    },
    el: '#start-game',

    start: function (e) {
      var category = e.currentTarget.getAttribute('data-category')
      console.log(category);

      e.preventDefault();
      $('.start-game-row').hide();
      $('.toggle-hide').show();

      var result = MyApp.createQuiz(category.toLowerCase());
      if (result.success) {

        var quizView = new MyApp.Views.QuizView({
          questions: result.selectedQuestions
        });
        $('#game').append(quizView.el);
      } else {
        console.log('error!');
      }
    }
  });

  MyApp.Views.HighScores = Backbone.View.extend({
    el: '#high-scores',

    initialize: function() {
      this.listenTo(userEvents, 'showScores', this.renderScores);
    },

    renderScores: function() {
      var callback = function(array) {
        window.MyApp.Instances.scores.sortScores(array);
        var sortedScores = array;
        console.log("sortedScores:", sortedScores);
        // grab top 10
        for (var i = 0; i < 10; i++) {
          if (sortedScores[i]) {
            var rank = i + 1;
            MyApp.userScoreViews[i].render(rank, sortedScores[i].user, sortedScores[i].score);
            // new MyApp.Views.UserScoreView({
            //   rank: i+1,
            //   user: sortedScores[i].user,
            //   score: sortedScores[i].score
            // });
          }
        }
        console.log("i can show you the scores");
        $('.start-game-row').hide();
        $('.high-scores').hide();
        $('#high-scores').show();
      }
      // get users and scores
      MyApp.db.getScores(callback);
    },

    sortScores: function(array) {
      array.sort(function(a, b) {
        return b.score-a.score;
      })
    }
  })

})();
