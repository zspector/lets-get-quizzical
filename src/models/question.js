(function () {

  window.Question = Backbone.Model.extend({
  });

  window.Questions = Backbone.Collection.extend({
    model: Question,
    counter: 0
  });

})();
