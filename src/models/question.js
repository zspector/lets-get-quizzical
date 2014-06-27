(function () {

  MyApp.Models.Question = Backbone.Model.extend({
  });

  MyApp.Collections.Questions = Backbone.Collection.extend({
    model: MyApp.Models.Question,
    counter: 0
  });

})();
