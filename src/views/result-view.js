(function() {

  MyApp.Views.ResultView = Backbone.View.extend({
    initialize: function(options) {
      this.score = options.finalScore;
      this.listenTo(userEvents, 'saveScore', this.saveOldScore)
      _.bindAll(this, 'restart', 'saveOldScore', 'saveNewScore');
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
      'click .save'   : 'checkForSave'
    },

    restart: function() {
      $('.result-row, .toggle-hide').hide();
      $('.start-game-row, .high-scores').show();
      this.scopedScore(0);
      // this.undelegateEvents();
      // $(this.el).off('click');
      // this.unbind('click');
      // this.remove();
    },

    // saveScore: function() {
    //   var name = $('.username').val().toUpperCase();
    //   var score = this.score;

    //   var callback3 = function(object) {
    //     console.log(object);
    //     object.score += score;
    //     MyApp.db.updateUser(object.user, object.score, callback2)
    //   }

    //   var callback2 = function() {
    //     MyApp.Instances.resultView.restart();
    //     $('.start-game-row, .high-scores').hide();
    //     userEvents.trigger('showScores');
    //     // $('#high-scores').show();
    //   }

    //   var callback1 = function(object) {
    //     var name = object.user;
    //     console.log("name in cb1:", name);
    //     if (object.newUser) {
    //       MyApp.db.addUser(name, score, callback2);
    //     } else {
    //       console.log('got here');

    //       MyApp.db.getUser(name, callback3);
    //       // userObject.score += score;
    //       // var updatedUser = MyApp.db.updateUser(userObject.user, userObject.score, callback4);
    //     }
    //   }

    //   if (name.length >= 3) {
    //     MyApp.db.getUser(name, callback1);
    //   } else {
    //     // alert
    //     alert('Name must be at least 3 characters');
    //   }
    // },

    saveOldScore: function() {
      var name = $('.username').val().toUpperCase();
      var score = this.score;

      var callback3 = function(object) {
        console.log(object);
        object.score += score;
        MyApp.db.updateUser(object.user, object.score, callback2)
      }

      var callback2 = function() {
        MyApp.Instances.resultView.restart();
        $('.start-game-row, .high-scores').hide();
        userEvents.trigger('showScores');
        // $('#high-scores').show();
      }
      console.log('attempting to save old score');
      MyApp.db.getUser(name, callback3);
    },

    saveNewScore: function(name, score) {
      var callback2 = function() {
        MyApp.Instances.resultView.restart();
        $('.start-game-row, .high-scores').hide();
        userEvents.trigger('showScores');
        // $('#high-scores').show();
      }

      MyApp.db.addUser(name, score, callback2);
    },

    checkForSave: function() {
      var name = $('.username').val().toUpperCase();
      var score = this.score;
      var that = this

      var callback1 = function(object) {
        var name = object.user;
        console.log("name in cb1:", name);
        if (object.newUser) {
          that.saveNewScore(name, score);
          // MyApp.db.addUser(name, score, callback2);
        } else {
          console.log('got here');
          $('.alert').slideDown('fast');
          // MyApp.db.getUser(name, callback3);
          // userObject.score += score;
          // var updatedUser = MyApp.db.updateUser(userObject.user, userObject.score, callback4);
        }
      }

      if (name.length >= 3) {
        // this.saveScore();
        MyApp.db.getUser(name, callback1)
      } else {
        alert("Name must be at least 3 characters");
      }
    }
  })

})();
