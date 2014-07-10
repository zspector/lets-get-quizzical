(function() {
  MyApp.Views.TimerView = Backbone.View.extend({
    className: 'timer-view',
    initialize: function() {
      this.startTime = 100;
      this.timer = this.startTime;
      _.bindAll(this, 'countdown', 'timerReset', 'destroyCountdown', 'render');
    },

    countdown: function() {
      this.timer -= this.startTime/100.0;
      if (this.timer >= 0) {
        if (this.timer <= 30) {
          $('.timer-row').css('color', '#c9302c');
        } else {
          $('.timer-row').css('color', '#FFD700')
        }
        this.render();
        var self = this;
        this.countdownTimeout = setTimeout(function(){
          self.countdown();
        }, 100);
      } else if (this.timer <= 0) {
        this.timerPause();
        userEvents.trigger('next')
      };
    },

    timerPause: function() {
      clearTimeout(this.countdownTimeout);
    },

    timerReset: function () {
      // clearTimeout(this.countdownTimeout);
      this.timer = this.startTime;
      this.render();
      this.countdown();
    },

    timerStartTime: function () {
      this.timer = this.startTime;
      this.render();
    },

    destroyCountdown: function() {
      clearTimeout(this.countdownTimeout);
      this.timer = this.startTime;
      // this.undelegateEvents();
      // this.unbind();
      // this.remove();
      // Backbone.View.prototype.remove.call(this);
    },

    render: function() {
      var newHtml = _.template($('.timer').html(), {timer: (this.timer/10).toFixed(1)})
      $(this.el).html(newHtml);
    }
  })
})();
