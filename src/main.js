(function () {

  MyApp.db = new MyApp.Database();

  // var quiz = new Questions();


  var view = new MyApp.Views.StartGame();


  MyApp.createQuiz = function() {
    var selectedQuestions = [];
    // Command
    // Grab data from db
    var questions = MyApp.db.getQuestions();
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
