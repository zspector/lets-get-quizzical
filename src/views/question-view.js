(function () {

  window.QuestionView = Backbone.View.extend({
    render: function() {
      var newHtml = _.template($('.question').html(), this.model.toJSON());
      $(this.el).append( newHtml );
    }
  });
})();
