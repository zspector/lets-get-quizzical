(function() {

  MyApp.Views.UserScoreView = Backbone.View.extend({
    initialize: function(options) {
      // this.rank = options.rank;
      // this.user = options.user;
      // this.score = options.score;
      // this.render();
    },

    className: 'user-score',

    render: function(userRank, userName, userScore ) {
      var newHtml = _.template($('.high-score').html(), {rank: userRank, user: userName, score: userScore});
      $(this.el).html(newHtml);
      $('#high-scores').append(this.el);
      // console.log(this.el);
    }
  })

})()
