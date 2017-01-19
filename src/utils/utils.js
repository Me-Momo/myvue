module.exports = {
  'EventUtil': {
    bind: function (el, type, handler) {
      if (el.addEventListener) {
        el.addEventListener(type, handler, false); //false代表拒绝冒泡
      } else if (el.attachEvent) {
        el.attachEvent('on' + type, handler);
      } else {
        el['on' + type] = handler
      }
    },
    unbind: function (el, type, handler) {
      if (el.removeEventListener) {
        el.removeEventListener(type, handler, false); //false代表拒绝冒泡
      } else if (el.detachEvent) {
        el.detachEvent('on' + type, handler);
      } else {
        el['on' + type] = null
      }
    }
  }
}
