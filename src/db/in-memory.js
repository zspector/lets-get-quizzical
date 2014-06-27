(function() {

  var questionBank = [
    {question: 'Question 1', answers: ['Answer 1', 'Answer 2', 'Answer 3', 'Answer 4',], correct: 'Answer 1'},
    {question: 'Question 2', answers: ['Answer 1', 'Answer 2', 'Answer 3', 'Answer 4',], correct: 'Answer 2'},
    {question: 'Question 3', answers: ['Answer 1', 'Answer 2', 'Answer 3', 'Answer 4',], correct: 'Answer 4'},
    {question: 'Question 4', answers: ['Answer 1', 'Answer 2', 'Answer 3', 'Answer 4',], correct: 'Answer 2'},
    {question: 'Question 5', answers: ['Answer 1', 'Answer 2', 'Answer 3', 'Answer 4',], correct: 'Answer 3'},
    {question: 'Question 6', answers: ['Answer 1', 'Answer 2', 'Answer 3', 'Answer 4',], correct: 'Answer 3'},
    {question: 'Question 7', answers: ['Answer 1', 'Answer 2', 'Answer 3', 'Answer 4',], correct: 'Answer 1'},
    {question: 'Question 8', answers: ['Answer 1', 'Answer 2', 'Answer 3', 'Answer 4',], correct: 'Answer 3'},
    {question: 'Question 9', answers: ['Answer 1', 'Answer 2', 'Answer 3', 'Answer 4',], correct: 'Answer 2'},
    {question: 'Question 10', answers: ['Answer 1', 'Answer 2', 'Answer 3', 'Answer 4',], correct: 'Answer 4'}
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
