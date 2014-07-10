(function() {
  MyApp.Views.TimerView = Backbone.View.extend({
    className: 'timer-view',
    initialize: function() {
      this.startTime = 100;
      this.timer = this.startTime;
      // this.render();
      _.bindAll(this, 'countdown', 'timerReset', 'destroyCountdown', 'render');
      // this.countdown(this);
      console.log(this);
    },

    countdown: function() {
      this.timer -= this.startTime/100.0;
      if (this.timer >= 0) {
        this.render();
        var self = this;
        this.countdownTimeout = setTimeout(function(){
          // this.timer -= 1;
          // this.render();
          self.countdown();
        }, 100);
      } else if (this.timer <= 0) {
        this.timerPause();
        // this.timerReset();
        userEvents.trigger('next')
      };
      // console.log(this);
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

    destroyCountdown: function() {
      clearTimeout(this.countdownTimeout);
      this.timer = this.startTime;
      // this.undelegateEvents();
      // this.unbind();
      // this.remove();
      // Backbone.View.prototype.remove.call(this);
    },

    render: function() {
      // console.log('rendering Time View')
      // var timer = (this.timer/10)
      var newHtml = _.template($('.timer').html(), {timer: (this.timer/10).toFixed(1)})
      // this.$el = ;
      // this.el.html('').append(this.$el);
      // this.$el.html(newHtml);
      $(this.el).html(newHtml);
    }
  })
})();
