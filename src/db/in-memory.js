(function() {

  var categories = ['Movies', 'Music', 'Sports']

  MyApp.movies = [
    {question: 'Who starred as Rocky Balboa?', answers: ['Sylvester Stallone', 'Robert DeNiro', 'Al Pacino', 'Russell Crowe',], correct: 'Sylvester Stallone'},
    {question: 'Which film had the song "Springtime for Hitler"?', answers: ['The Producers', 'The Pianist', 'A History of the World Part 1', 'Valkyrie',], correct: 'The Producers'},
    {question: 'Who has won the most Oscars?', answers: ['Walt Disney', 'Steven Spielberg', 'Alfred Hitchcok', 'Martin Scorscece',], correct: 'Walt Disney'},
    {question: 'What is the name of the nightclub in "Casablanca"?', answers: ["Rick's", "Pierre's", "Sam's", "Bert's",], correct: "Rick's"},
    {question: 'Who played James Bond in "Licence to Kill"?', answers: ['Sean Connery', 'Roger Moore', 'Pierce Brosnen', 'Timothy Dalton',], correct: 'Timothy Dalton'},
    {question: 'Which is the first Walt Disney animated classic?', answers: ['Snow White', 'Cinderella', 'The Sword and the Stone', 'Fantasia',], correct: 'Snow White'},
    {question: 'Which of the following was NOT a voice cast in "Kung Fu Panda"?', answers: ['Jackie Chan', 'Angelina Jolie', 'Seth Rogen', 'Ben Stiller',], correct: 'Ben Stiller'},
    {question: 'Where was a majority of the filming done for "The Lord of the Rings" trilogy?', answers: ['New Zealand', 'Hawaii', 'Australia', 'Hollywood',], correct: 'New Zealand'},
    {question: "Which movie is the following quote from: 'Here's Looking at you kid!'?", answers: ['Casablanca', 'Gone with the Wind', 'The Godfather', 'Casino',], correct: 'Casablanca'},
    {question: "Which movie's tagline was: 'It will blow audiences right out of the theather'?", answers: ['Twister', 'Deep Impact', 'Independence Day', 'Sharknado',], correct: 'Twister'},
    {question: 'Which of the following is not a Pixar movie?', answers: ['Brave', 'Monsters University', 'Wreck-it Ralph', "A Bug's Life",], correct: 'Wreck-it Ralph'},
    {question: 'In the film "Forrest Gump", what song did Forrest Gump inspire?', answers: ['Imagine', 'Fortunate Son', 'Give Peace a Chance', "Ramblin' Man",], correct: 'Imagine'},
    {question: "How many hubcaps does Steve McQueen's care lose in the famouse chase scene from 'Bullitt'?", answers: ['6', '2', '4', '1',], correct: '6'},
    {question: "In the first two Jaws films, what was the police chief's name?", answers: ['Martin Brody', 'Ken Hutchinson', 'Scott Turner', 'Harry Callahan',], correct: 'Martin Brody'},
    {question: 'Bruce Willis played a time travelling criminal in what movie?', answers: ['Twelve Monkeys', 'Timecop', 'The Fifth Element', 'The Last Boy Scout',], correct: 'Twelve Monkeys'},
    {question: 'What actor was known as Singing Sandy early in his career?', answers: ['John Wayne', 'Fred Astaire', 'Charlton Heston', 'Gene Kelly',], correct: 'John Wayne'},
    {question: "What was the name of the high school in 'Grease'?", answers: ['Rydell High', 'Shermer High', 'Radnor High', 'Seton High',], correct: 'Rydell High'},
    {question: "What was Marilyn Monroe's real last name?", answers: ['Mortenson', 'Smith', 'Bukowski', 'Manson',], correct: 'Mortenson'},
    {question: "In 'Star Wars', who is the first character to speak?", answers: ['C-3P0', 'Princess Leia', 'Darth Vader', 'Luke Skywalker',], correct: 'C-3P0'},
    {question: 'In which movie did Audrey Hepburn play the character Holly Golightly', answers: ["Breakfast at Tiffany's", 'Charade', 'My Fair Lady', 'Roman Holiday',], correct: "Breakfast at Tiffany's"}
  ];

  MyApp.music = [
    {question: 'Carl and the Passions changed their band name to what?', answers: ['The Beatles', 'The Kingsmen', 'The Beach Boys', 'Cream',], correct: 'The Beach Boys'},
    {question: 'Who sang the theme song in 9 to 5?', answers: ['Dolly Parton', 'Donna Summer', 'Chaka Khan', 'Bonny Tyler',], correct: 'Dolly Parton'},
    {question: 'What musician has the nickname, Satchmo?', answers: ['Louis Armstrong', 'Kurt Cobain', 'Keith Richards', 'Little Richard',], correct: 'Louis Armstrong'},
    {question: 'Which of the following did John Williams NOT score?', answers: ['Superman', 'Raiders of the Lost Ark', 'Jaws', 'Back to the Future',], correct: 'Back to the Future'},
    {question: "What rock 'n' roll singer is memorialized by an eight-foot bronze statue in Lubbock, Texas?", answers: ['Buddy Holly', 'Johnny Cash', 'Willie Nelson', 'Janis Joplin',], correct: 'Buddy Holly'},
    {question: 'Which Beatles single lastes the longest on the charts?', answers: ['Hey Jude', "A Hard Day's Night", 'Let It Be', 'Yesterday',], correct: 'Hey Jude'},
    {question: 'Who was the first country artist to sell over 10 million copies of an album', answers: ['Garth Brooks', 'Keith Urban', 'Toby Keith', 'Carrie Underwood',], correct: 'Garth Brooks'},
    {question: "What is Snoop Dogg's real name?", answers: ['Sean Carter', 'Calvin Broadus', 'Andre Young', 'Jeffrey Atkins',], correct: 'Calvin Broadus'},
    {question: 'Who was NOT a member of the Beastie Boys?', answers: ['Mike D', 'Ad-Rock', 'MCA', 'Jam Master Jay',], correct: 'Jam Master Jay'},
    {question: 'Who did Sammy Hagar replace in the band Van Halen?', answers: ['Van Halen', 'David Lee Roth', 'Tommy Lee', 'Bret Michaels',], correct: 'David Lee Roth'},
    {question: 'Which classical musician caused his fans to have fits of hysteria from his performances?', answers: ['Liszt', 'Bach', 'Tchaikovsky', 'Mozart',], correct: 'Liszt'},
    {question: 'The Band were originally the backing band for which singer?', answers: ['Bob Dylan', 'Janis Joplin', 'Jimi Hendrix', 'Neil Young',], correct: 'Bob Dylan'},
    {question: 'Motown Records was founded in which city?', answers: ['Detroit', 'Nashville', 'New York', 'Los Angeles',], correct: 'Detroit'},
    {question: 'John Paul Jones played bass in which band?', answers: ['Led Zeppelin', 'Aerosmith', 'The Rolling Stones', 'AC/DC',], correct: 'Led Zeppelin'},
    {question: 'Who sang the hit song "Monster Mash"', answers: ['Bobby Pickett', 'Allen Sherman', "'Weird Al' Yankovic", 'Chubby Checker',], correct: 'Bobby Pickett'},
    {question: "What is the best selling album of all time?", answers: ['Thriller', 'Back in Black', 'The Dark side of the Moon', 'Abbey Road',], correct: 'Thriller'},
    {question: 'Which 90s rock band sang "Til I Hear it From You"?', answers: ['Gin Blossoms', 'The Spin Doctors', 'Better Than Ezra', 'Hootie and the Blowfish',], correct: 'Gin Blossoms'},
    {question: 'In which state is the Lollapalooza music festival held?', answers: ['Illinois', 'California', 'Tennessee', 'New York',], correct: 'Illinois'},
    {question: 'What was the first music video aired on MTV?', answers: ['Video Killed the Radio Star', 'Thriller', 'Staying Alive', "Jessie's Girl",], correct: 'Video Killed the Radio Star'},
    {question: 'What was the first song performed in outer space?', answers: ['Happy Birthday', 'The Star Spangled Banner', 'Space Oddity', 'Ring Around the Rosey',], correct: 'Happy Birthday'},
    {question: 'What song did Bruce Springsteen win an Oscar for?', answers: ['Streets of Philadelphia', 'Secret Garden', 'The Wrestler', 'Dead Man Walking',], correct: 'Streets of Philadelphia'}
  ]

  MyApp.sports = [
    {question: 'How many rings are on the Olympic flag?', answers: ['Five', 'Eight', 'Six', 'Seven',], correct: 'Five'},
    {question: 'Who was the first man to run a sub four minute mile?', answers: ['Roger Bannister', 'Steve Prefontaine', 'Peter Rono', 'Noureddine Morceli',], correct: 'Roger Bannister'},
    {question: "The terms 'try', 'throw-in', 'ruck' and 'put in' are associated with whichs sport?", answers: ['Rugby', 'Soccer', 'Cricket', 'Tennis',], correct: 'Rugby'},
    {question: "Which athlete was famously known as 'Sweetness'?", answers: ['Walter Payton', 'Johnny Unitas', 'Michael Jordan', 'Hank Aaron',], correct: 'Walter Payton'},
    {question: 'In which state was basketball invented?', answers: ['Kansas', 'Indiana', 'New York', 'Massachusetts',], correct: 'Massachusetts'},
    {question: 'Who was the first US president to throw out a first pitch at a baseball game?', answers: ['William Taft', 'Teddy Roosevelt', 'Dwight Eisenhower', 'Ronald Reagan',], correct: 'William Taft'},
    {question: 'Who was the oldest person to win the Heisman Trophy?', answers: ['Chris Weinke', 'Jay Berwanger', 'Earl Campbell', 'Archie Griffin',], correct: 'Chris Weinke'},
    {question: "Which of the following is not one of Babe Ruth's nicknames?", answers: ['The Sultan of Swat', 'The Colossus of Clout', 'The Great Bambino', 'The Big Hurt',], correct: 'The Big Hurt'},
    {question: 'Which was the first European nation to win the FIFA World Cup?', answers: ['Italy', 'England', 'France', 'Uruguay',], correct: 'Italy'},
    {question: 'In 1968, Hans-Gunnar Liljenwall was the first athlete to fail an Olympic drug test by testing positive for what?', answers: ['Beer', 'Marijuana', 'Steroids', 'Amphetamines',], correct: 'Beer'},
    {question: 'Which football team has the most Championships?', answers: ['Packers', 'Bears', 'Giants', 'Steelers',], correct: 'Packers'},
    {question: 'Which cricketer has scored the most first class centuries in history?', answers: ['Sachin Tendulkar', 'Ricky Ponting', 'Michael Slater', 'Jack Hobbs',], correct: 'Jack Hobbs'},
    {question: 'Which college has the most basketball championships?', answers: ['UCLA', 'Kentucky', 'Kansas', 'Indiana',], correct: 'UCLA'},
    {question: "What is the name of college lacrosse's trophy for best player in the nation?", answers: ['Tewaaraton Award', 'Hopkins Award', 'Wooden Award', 'Navajo Award',], correct: 'Tewaaraton Award'},
    {question: 'Which event did Michael Phelps NOT win a medal in?', answers: ['Butterfly', 'Backstroke', 'Freestyle', 'Breaststroke',], correct: 'Breaststroke'},
    {question: 'Which was the last horse to win the Triple Crown?', answers: ['Affirmed', 'Seattle Slew', 'Secretariat', 'Seabiscuit',], correct: 'Affirmed'},
    {question: 'How many schools are members of the Big Ten Conference?', answers: ['10', '11', '12', '14',], correct: '14'},
    {question: 'Which hockey team was NOT one of the Original Six?', answers: ['Maple Leafs', 'Red Wings', 'Rangers', 'Penguins',], correct: 'Penguins'},
    {question: 'Wrigley Field is home to which team?', answers: ['Orioles', 'Cubs', 'Red Sox', 'Dodgers',], correct: 'Cubs'},
    {question: "Who has won the most F1 World Drivers' Championships?", answers: ['Michael Shumacher', 'Niki Lauda', 'Alain Prost', 'Mario Andretti',], correct: 'Michael Shumacher'},
    {question: 'Which country has won the most Grand Slam tennis titles?', answers: ['United States', 'United Kingdom', 'Australia', 'Sweden',], correct: 'United States'}
  ]

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

  // var highScores = [
  //   {user: 'CPU2', score: 9000},
  //   {user: 'CPU6', score: 5000},
  //   {user: 'CPU4', score: 7000},
  //   {user: 'CPU1', score: 10000},
  //   {user:'CPU5', score: 6000},
  //   {user: 'CPU3', score: 8000},
  //   {user: 'CPU7', score: 4000},
  //   {user: 'CPU8', score: 3000},
  //   {user: 'CPU9', score: 2000},
  //   {user: 'CPU10', score: 1000}
  // ];


  MyApp.Database = function () {

    var usersRef = new Firebase('https://lets-get-quizzical.firebaseio.com/users')

    // Categories //
    this.getCategories = function () {
      return categories;
    }

    // Questions //
    this.getQuestions = function (category) {
      // Grab q from questionBank
      console.log('category:',category)
      return MyApp[category]
    };

    this.selectQuestion = function (id) {
      // Select stuff
    };

    // Users and Scores //
    this.addUser = function(username, userScore, callback) {
      var usersRef = new Firebase('https://lets-get-quizzical.firebaseio.com/users')
      var newUserRef = usersRef.child(username)
      newUserRef.set({user: username, score: userScore});
      // var newChild = usersRef.child(username);
      // newChild.set({'user': username, 'score': userScore});
      callback();
      // highScores.push({user: username, score: userScore});
    };

    this.getUser = function(username, callback) {
      var object = {};
      var userRef = new Firebase('https://lets-get-quizzical.firebaseio.com/users/' + username);
      userRef.once('value', function(snapshot){
        if (snapshot.val() === null) {
          console.log("user doesn't exist");
          object = {newUser: true, user: username};
        } else {
          console.log("user exists");
          var retrievedUser = snapshot.val().user;
          console.log("retrievedUser:", retrievedUser)
          var retrievedScore = snapshot.val().score;
          console.log("retrievedScore:", retrievedScore);
          object = {user: retrievedUser, score: retrievedScore};
        }
        callback(object);
      });
      // for (var i = 0; i < highScores.length; i++) {
      //   if (highScores[i].user === username) {
      //     return highScores[i];
      //   }
      // }
    };

    this.updateUser = function(username, userScore, callback) {

      var userRef = new Firebase('https://lets-get-quizzical.firebaseio.com/users/' + username);
      userRef.update({user: username, score: userScore});
      // for (var i = 0; i < highScores.length; i++) {
      //   if (highScores[i].user === username) {
      //     highScores[i].score = userScore;
      //     return highScores[i];
      //   }
      // }
      callback();
    }

    this.getScores = function(callback) {
      var highScores =[];
      var usersRef = new Firebase('https://lets-get-quizzical.firebaseio.com/users');
      usersRef.once('value', function(snapshot) {
        snapshot.forEach(function(childSnapShot) {
          var username = childSnapShot.val().user;
          var score = childSnapShot.val().score;
          var newObj = {user: username, score: score};
          highScores.push(newObj);
        });
        console.log(highScores);
        callback(highScores);
        // var userObj = snapshot.val();
        // for (key in userObj) {
        //   var retrievedUser = key.user;
        //   console.log("retrievedUser:", retrievedUser)
        //   var retrievedScore = key.score;
        //   console.log("retrievedScore:", retrievedScore);
        //   var newObj = {user: retrievedUser, score: retrievedScore};
        //   highScores.push(newObj);
        // }
      });
    }
  };

})();
