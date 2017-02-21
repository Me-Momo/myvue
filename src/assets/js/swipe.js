(function ($, undefined) {
  /*
   * Swipe object.
   */
  $.Swipe = function (options, element) {

    this.$el = $(element);
    this._init(options);
  };

  $.Swipe.defaults = {
    current: 0, // index of current item
    autoplay: false, // slideshow on / off
    interval: 3000 // time between transitions;
  };

  $.Swipe.prototype = {
    _init: function (options) {

      this.options = $.extend(true, {}, $.Swipe.defaults, options);


      this.$list = this.$el.find('.swipe-list');

      this.$items = this.$list.children();
      this.itemsCount = this.$items.length;

      this.$indicators = this.$el.find('.swipe-indicator>li');

      this.$nav = this.$el.find('.swipe-action');
      this.$navPrev = this.$nav.find('.prev');
      this.$navNext = this.$nav.find('.next');

      // minimum of 3 items
      if (this.itemsCount < 3) {
        this.$nav.remove();
        return false;
      }

      this.current = this.options.current;

      this.isAnim = false;

      this._layout();

      // load the events
      this._loadEvents();

      //slideshow
      if (this.options.autoplay) {
        this._cycle();
      }

    },
    _layout: function () {
      // current, left and right items
      this._setItems();

      // current item is not changed
      // left and right one are rotated and translated
      this.$leftItem.css(this._getCoordinates('left'));
      this.$rightItem.css(this._getCoordinates('right'));
      this.$currentItem.css(this._getCoordinates('center'));

      this.$nextItem.css(this._getCoordinates('outright'));
      this.$prevItem
        .css(this._getCoordinates('outleft'));

      this.$indicators.eq(this.current)
        .css('background', 'rgb(244, 67, 54)')
        .siblings()
        .css("background", "rgba(0, 0, 0, 0.2)");
    },
    _getCoordinates: function (position) {
      switch (position) {
        case 'outleft':
          return {
            '-webkit-transform': 'translate(-450px) scale(0.5)',
            '-moz-transform': 'translate(-450px) scale(0.5)',
            '-o-transform': 'translate(-450px) scale(0.5)',
            '-ms-transform': 'translate(-450px) scale(0.5)',
            'transform': 'translate(-450px) scale(0.5)',
            'opacity': 0,
            'visibility': 'hidden'
          };

          break;
        case 'outright':
          return {
            '-webkit-transform': 'translate(450px) scale(0.5)',
            '-moz-transform': 'translate(450px) scale(0.5)',
            '-o-transform': 'translate(450px) scale(0.5)',
            '-ms-transform': 'translate(450px) scale(0.5)',
            'transform': 'translate(450px) scale(0.5)',
            'opacity': 0,
            'visibility': 'hidden'
          };

          break;
        case 'left':
          return {
            '-webkit-transform': 'translate(-350px) scale(0.8) rotateY(45deg)',
            '-moz-transform': 'translate(-350px) scale(0.8) rotateY(45deg)',
            '-o-transform': 'translate(-350px) scale(0.8) rotateY(45deg)',
            '-ms-transform': 'translate(-350px) scale(0.8) rotateY(45deg)',
            'transform': 'translate(-350px) scale(0.8) rotateY(45deg)',
            'opacity': 0.7,
            'visibility': 'visible',
            'z-index': '1'
          };

          break;
        case 'right':
          return {
            '-webkit-transform': 'translate(350px) scale(0.8) rotateY(-45deg)',
            '-moz-transform': 'translate(350px) scale(0.8) rotateY(-45deg)',
            '-o-transform': 'translate(350px) scale(0.8) rotateY(-45deg)',
            '-ms-transform': 'translate(350px) scale(0.8) rotateY(-45deg)',
            'transform': 'translate(350px) scale(0.8) rotateY(-45deg)',
            'opacity': 0.7,
            'visibility': 'visible',
            'z-index': '1'
          };

          break;
        case 'center':
          return {
            '-webkit-transform': 'translate(0px) scale(1)',
            '-moz-transform': 'translate(0px) scale(1)',
            '-o-transform': 'translate(0px) scale(1)',
            '-ms-transform': 'translate(0px) scale(1)',
            'transform': 'translate(0px) scale(1)',
            'opacity': 1,
            'visibility': 'visible',
            'z-index': '9999'
          };

          break;
      };
    },

    // 更新图片位置
    _setItems: function () {
      this.$items.removeClass('current');

      this.$currentItem = this.$items.eq(this.current)
        .addClass('current');
      this.$leftItem = (this.current === 0) ? this.$items.eq(this.itemsCount -
        1) : this.$items.eq(this.current - 1);

      this.$rightItem = (this.current === this.itemsCount - 1) ? this
        .$items
        .eq(0) : this.$items.eq(this.current + 1);

      //next & previous items
      if (this.itemsCount > 3) {
        // next item
        this.$nextItem = (this.$rightItem.index() === this.itemsCount -
            1) ?
          this.$items.eq(0) : this.$rightItem.next();

        // previous item
        this.$prevItem = (this.$leftItem.index() === 0) ? this.$items
          .eq(
            this.itemsCount - 1) : this.$leftItem.prev();
      }
    },
    _loadEvents: function () {
      var _self = this;

      this.$navPrev.on('click.Swipe', function (event) {

        if (_self.options.autoplay) {

          clearTimeout(_self.slideshow);
          _self.options.autoplay = false;
        }

        _self._slide('prev');
        return false;
      });

      this.$navNext.on('click.Swipe', function (event) {
        if (_self.options.autoplay) {

          clearTimeout(_self.slideshow);
          _self.options.autoplay = false;
        }

        _self._slide('next');
        return false;
      });

      this.$list.on(
        'webkitTransitionEnd.Swipe transitionend.Swipe OTransitionEnd.Swipe',
        function (event) {
          _self.$currentItem.css(_self._getCoordinates('center'))
            .addClass('current');
          _self.$items.removeClass('swipe-transition');
          _self.isAnim = false;
        });
      // 添加移动端触屏事件
      var startX = 0,
        moveEndX = 0;
      this.$list.on("touchstart", function (e) {
        e.preventDefault();
        startX = e.originalEvent.changedTouches[0].pageX;
      });
      this.$list.on("touchend", function (e) {
        e.preventDefault();
        moveEndX = e.originalEvent.changedTouches[0].pageX;
        var X = moveEndX - startX;
        if (X > 0) {
          _self._slide('prev');
        } else
        if (X < 0) {
          _self._slide('next');
        }
      });

      if (this.$indicators) {
        this._switchItems();
      }

    },
    _slide: function (dir) {
      if (this.isAnim)
        return false;
      this.isAnim = true;
      this.$items.addClass("swipe-transition");
      switch (dir) {
        case 'next':
          this.current = this.$rightItem.index();
          this._layout();
          break;
        case 'prev':
          this.current = this.$leftItem.index();
          this._layout();
          break;
      };
    },
    _switchItems() {
      var _self = this;
      for (var i = 0, len = _self.$indicators.length; i < len; i++) { // 点击小圆点
        $(_self.$indicators[i])
          .bind('click', function () {
            var toIndex = parseInt($(this)
              .data('index'));
            var toMove = toIndex - _self.current;
            switch (toMove) {
              case 0:
                break;
              case 1:
                _self._slide('next');
                break;
              case -1:
                _self._slide('prev');
                break;
              default:
                _self._stopCycle();
                var interval = setInterval(function () {
                  if (!_self.isAnim) {
                    if (!toMove) {
                      clearInterval(interval);
                      if (_self.options.autoplay) {
                        _self._cycle();
                      }
                    } else if (toMove > 0) {
                      _self._slide('next');
                      toMove--;
                    } else if (toMove < 0) {
                      _self._slide('prev');
                      toMove++;
                    }
                  }
                }, 0);
                break;
            }
          });
      }
    },
    _cycle: function () {
      var _self = this;

      this.$cycle = setTimeout(function () {
        _self._slide('next');
        if (_self.options.autoplay) {
          _self._cycle();
        }

      }, this.options.interval);
    },
    _stopCycle: function () {
      clearTimeout(this.$cycle);
    },
    destroy: function () {
      this.$navPrev.off('.Swipe');
      this.$navNext.off('.Swipe');
      this.$list.off('.Swipe');
    }
  };

  var logError = function (message) {
    if (this.console) {
      console.error(message);
    }
  };

  // $.fn=$.prototype
  // 此处给JQuery添加Swipe方法
  $.fn.Swipe = function (options) {
    if (options === undefined) options = {};
    if (typeof options === 'object') {
      this.each(function () {
        // jQuery.data( element, key, value )
        var instance = $.data(this, 'Swipe');
        if (!instance) {
          $.data(this, 'Swipe', new $.Swipe(options, this));
        }
      });
    } else {
      this.each(function () {
        var instance = $.data(this, 'Swipe');
        if (instance) {
          switch (options) {
            case 'cycle':
              instance._cycle();
              instance.options.autoplay = true;
              break;
            case 'stop':
              instance._stopCycle();
              instance.options.autoplay = false;
              break;
            case 'next':
              instance._slide('next');
              break;
            case 'prev':
              instance._slide('prev');
              break;
            default:
              logError("no such method '" + options +
                "' for Swipe instance");
              break;
          }
        } else {
          logError(
            "cannot call methods on Swipe prior to initialization; " +
            "attempted to call method '" + options + "'");
          return;
        }
      });
    }
    return this;
  };
})(jQuery);

$(function () {
  $("#swipe")
    .Swipe();
});
