(function() {

  MyApp.Views.ResultView = Backbone.View.extend({
    initialize: function(options) {
      this.score = options.finalScore;
      _.bindAll(this, 'restart', 'saveScore');
    },

    scopedScore: function(score) {
      this.score = score;
    },

    render: function(score) {
      var newHtml = _.template($('.result').html(), {score: score});
      // $(this.el).html( newHtml );
      // this.$el = $('<div class="result-view"></div>')
      // $('#result').append(this.$el);
      $(this.el).html(newHtml);
    },

    events: {
      'click .no-save': 'restart',
      'click .save'   : 'saveScore'
    },

    restart: function() {
      $('#result').hide();
      $('#start-game').show();
      this.scopedScore(0);
      // this.undelegateEvents();
      // $(this.el).off('click');
      // this.unbind('click');
      // this.remove();
    },

    saveScore: function() {
      var name = $('.username').val().toUpperCase();
      var score = this.score;

      var callback3 = function(object) {
        console.log(object);
        object.score += score;
        MyApp.db.updateUser(object.user, object.score, callback2)
      }

      var callback2 = function() {
        MyApp.Instances.resultView.restart();
        userEvents.trigger('showScores');
        // $('#high-scores').show();
      }

      var callback1 = function(object) {
        var name = object.user;
        console.log("name in cb1:", name);
        if (object.newUser) {
          MyApp.db.addUser(name, score, callback2);
        } else {
          console.log('got here');
          MyApp.db.getUser(name, callback3);
          // userObject.score += score;
          // var updatedUser = MyApp.db.updateUser(userObject.user, userObject.score, callback4);
        }
      }

      if (name.length >= 3) {
        // var highScores = MyApp.db.getScores();
        MyApp.db.getUser(name, callback1);
        // if (MyApp.db.getUser(name) === 'failure') {
        //   // user does not exist so add him and final score to db
        //   MyApp.db.addUser(name, score);
        // } else {
        //   // user exists so add final score to total score
        //   var userObject = MyApp.db.getUser(name);
        //   userObject.score += this.score;
        //   var updatedUser = MyApp.db.updateUser(userObject.user, userObject.score);
        //   console.log(updatedUser);
        // }
        // // console.log(MyApp.db.getScores());
      } else {
        // alert
        alert('Name must be at least 3 characters');
      }
      // this.restart();
      // userEvents.trigger('showScores');
      // $('#high-scores').show();
    }
  })

})();
