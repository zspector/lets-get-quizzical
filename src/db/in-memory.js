(function() {

  var questionBank = [
    {question: 'Question 1', answers: ['Correct', 'Answer 2', 'Answer 3', 'Answer 4',], correct: 'Correct'},
    {question: 'Question 2', answers: ['Answer 1', 'Correct', 'Answer 3', 'Answer 4',], correct: 'Correct'},
    {question: 'Question 3', answers: ['Answer 1', 'Answer 2', 'Answer 3', 'Correct',], correct: 'Correct'},
    {question: 'Question 4', answers: ['Answer 1', 'Correct', 'Answer 3', 'Answer 4',], correct: 'Correct'},
    {question: 'Question 5', answers: ['Answer 1', 'Answer 2', 'Correct', 'Answer 4',], correct: 'Correct'},
    {question: 'Question 6', answers: ['Answer 1', 'Answer 2', 'Correct', 'Answer 4',], correct: 'Correct'},
    {question: 'Question 7', answers: ['Correct', 'Answer 2', 'Answer 3', 'Answer 4',], correct: 'Correct'},
    {question: 'Question 8', answers: ['Answer 1', 'Answer 2', 'Correct', 'Answer 4',], correct: 'Correct'},
    {question: 'Question 9', answers: ['Answer 1', 'Correct', 'Answer 3', 'Answer 4',], correct: 'Correct'},
    {question: 'Question 10', answers: ['Answer 1', 'Answer 2', 'Answer 3', 'Correct',], correct: 'Correct'}
  ];


  MyApp.Database = function () {
    this.getQuestions = function () {
      // Grab q from questionBank
      return questionBank
    };

    this.selectQuestion = function (id) {
      // Select stuff
    };
  };

})();
