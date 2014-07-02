(function() {
  MyApp.Views.ScoreView = Backbone.View.extend({
    initialize: function(options) {
      this.score = 0;
      this.render();
      _.bindAll(this, 'render');
    },

    className: 'score-view',

    render: function() {
      console.log(this.score);
      var newHtml = _.template($('.score').html(), {score: this.score});
      $(this.el).html(newHtml);
      console.log("Rendered score. HTML:", newHtml);
    }
  })
})();
