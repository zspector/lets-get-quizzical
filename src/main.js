(function () {
  var quiz = new Questions();

  var quizView = new QuizView({
    collection: quiz,
    el: $('#game')
  });

  // var questionBank = [
  //   {question: 'Question 1', answer1: 'Answer 1', answer2: 'Answer 2', answer3: 'Answer 3', answer4: 'Answer4'},
  //   {question: 'Question 2', answer1: 'Answer 1', answer2: 'Answer 2', answer3: 'Answer 3', answer4: 'Answer4'},
  //   {question: 'Question 3', answer1: 'Answer 1', answer2: 'Answer 2', answer3: 'Answer 3', answer4: 'Answer4'},
  //   {question: 'Question 4', answer1: 'Answer 1', answer2: 'Answer 2', answer3: 'Answer 3', answer4: 'Answer4'},
  //   {question: 'Question 5', answer1: 'Answer 1', answer2: 'Answer 2', answer3: 'Answer 3', answer4: 'Answer4'},
  //   {question: 'Question 6', answer1: 'Answer 1', answer2: 'Answer 2', answer3: 'Answer 3', answer4: 'Answer4'},
  //   {question: 'Question 7', answer1: 'Answer 1', answer2: 'Answer 2', answer3: 'Answer 3', answer4: 'Answer4'}
  // ]

  $('.start-game').click(function(e) {
    e.preventDefault();
    $('#start-game').hide();
    quiz.add(
      questionBank[0]
      // [
      // {question: 'Question 1', answer1: 'Answer 1', answer2: 'Answer 2', answer3: 'Answer 3', answer4: 'Answer4'},
      // {question: 'Question 2', answer1: 'Answer 1', answer2: 'Answer 2', answer3: 'Answer 3', answer4: 'Answer4'},
      // {question: 'Question 3', answer1: 'Answer 1', answer2: 'Answer 2', answer3: 'Answer 3', answer4: 'Answer4'},
      // {question: 'Question 4', answer1: 'Answer 1', answer2: 'Answer 2', answer3: 'Answer 3', answer4: 'Answer4'},
      // {question: 'Question 5', answer1: 'Answer 1', answer2: 'Answer 2', answer3: 'Answer 3', answer4: 'Answer4'},
      // {question: 'Question 6', answer1: 'Answer 1', answer2: 'Answer 2', answer3: 'Answer 3', answer4: 'Answer4'},
      // {question: 'Question 7', answer1: 'Answer 1', answer2: 'Answer 2', answer3: 'Answer 3', answer4: 'Answer4'}
    // ]
    );
  });
})();
