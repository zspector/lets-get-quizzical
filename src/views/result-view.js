(function() {

  MyApp.Views.ResultView = Backbone.View.extend({
    initialize: function(options) {
      this.score = options.finalScore;
    },

    render: function() {
      var newHtml = _.template($('.result').html(), {score: this.score});
      // $(this.el).html( newHtml );
      this.$el = $('<div class="result-view"></div>')
      $('#result').append(this.$el);
      $(this.$el).html(newHtml);
    },

    events: {
      'click .continue': 'restart'
    },

    restart: function() {
      $('#start-game').show();
      this.remove();
    }
  })

})();
