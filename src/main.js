(function () {

  // initialize database
  MyApp.db = new MyApp.Database();

  // Create category buttons
  MyApp.createCategoryButtons = function() {
    var categories = MyApp.db.getCategories();
    for (var i = 0; i < categories.length; i++) {
      // console.log(categories[i]);
      var newCatView = new MyApp.Views.Category({
        category: categories[i],
      });
      newCatView.render();
    }
  }

  MyApp.createCategoryButtons();

  // Create array to put highScoreViews in, available to re-render later
  MyApp.userScoreViews = []
  // Create 10 views to re-use with highscores
  MyApp.createUserScoreViews = function() {
    for (var i = 0; i < 10; i++) {
      MyApp.Views['userScoreView' + (i + 1)] = new MyApp.Views.UserScoreView();
      MyApp.userScoreViews.push(MyApp.Views['userScoreView' + (i + 1)]);
    }
  };

  // create user score views
  MyApp.createUserScoreViews();

  // create the highScore view
  MyApp.Instances.scores = new MyApp.Views.HighScores();

  MyApp.Instances.view = new MyApp.Views.StartGame();

  MyApp.Instances.resultView = new MyApp.Views.ResultView({
    el: '#result'
  })

  MyApp.Instances.timer = new MyApp.Views.TimerView();

  var scores = MyApp.Instances.scores;
  var view   = MyApp.Instances.view;

  $('.high-scores').click(function(){
    userEvents.trigger('showScores');
    // $('#high-scores').show();
  });

  $('.close-scores').click(function() {
    $('#high-scores').hide();
    // $('.toggle-hide').hide();
    $('.start-game-row').show();
  })


  MyApp.createQuiz = function(category) {
    var selectedQuestions = [];
    // Command
    // Grab data from db
    var questions = MyApp.db.getQuestions(category);
    console.log('questions:', questions);
    selectQuestions(questions, selectedQuestions);
    shuffleAnswers(selectedQuestions)
    createQuestionModels(selectedQuestions)

    return {
      success: true,
      selectedQuestions: selectedQuestions
    };
  };

  function shuffle(array) {
    for(var j, x, i = array.length; i; j = Math.floor(Math.random() * i), x = array[--i], array[i] = array[j], array[j] = x);
    return array;
  }

  function selectQuestions(array1, array2) {
    shuffle(array1)
    for (var i = 0; i < 7; i++) {
      array2.push(array1[i]);
    }
  }

  function shuffleAnswers(array) {
    for (var i = 0; i < array.length; i++) {
      shuffle(array[i].answers);
    }
  }

  function createQuestionModels(array) {
    for (var i = 0; i < array.length; i++) {
      // console.log(array[i]);
      var newQuestionModel = {
        question: array[i].question,
        answer1: array[i].answers[0],
        answer2: array[i].answers[1],
        answer3: array[i].answers[2],
        answer4: array[i].answers[3],
        correct: array[i].correct
      };
      array[i]= newQuestionModel;
    }
  }

})();
