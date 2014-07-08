(function() {
  MyApp.Views.TimerView = Backbone.View.extend({
    className: 'timer-view',
    initialize: function() {
      this.timer = 11;
      // this.render();
      _.bindAll(this, 'countdown', 'timerReset', 'destroyCountdown', 'render');
      // this.countdown(this);
      console.log(this);
    },

    countdown: function() {
      this.timer -= 1;
      this.render();
      if (this.timer > -1) {
        var self = this;
        this.countdownTimeout = setTimeout(function(){
          // this.timer -= 1;
          // this.render();
          self.countdown();
        }, 1000);
      } else if (this.timer === -1) {
        this.timerPause();
        this.timerReset();
        userEvents.trigger('next')
      };
      // console.log(this);
    },

    timerPause: function() {
      clearTimeout(this.countdownTimeout);
    },

    timerReset: function () {
      // clearTimeout(this.countdownTimeout);
      this.timer = 11;
      this.render();
      this.countdown();
    },

    destroyCountdown: function() {
      clearTimeout(this.countdownTimeout);
      this.undelegateEvents();
      this.unbind();
      this.remove();
      Backbone.View.prototype.remove.call(this);
    },

    render: function() {
      // console.log('rendering Time View')
      var newHtml = _.template($('.timer').html(), {timer: this.timer})
      // this.$el = ;
      // this.el.html('').append(this.$el);
      // this.$el.html(newHtml);
      $(this.el).html(newHtml);
    }
  })
})();
