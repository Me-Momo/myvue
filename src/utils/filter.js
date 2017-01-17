import Vue from 'vue'

// 全局方法 Vue.filter() 注册一个自定义过滤器,必须放在Vue实例化前面
Vue.filter('timeFormat', function (value) {
  var value = value / 1000;
  var m = parseInt(value / 60);
  value -= (60 * m);
  var s = parseInt(value % 60);
  if (m / 10 < 1 && s / 10 < 1) {
    return "0" + m + ':' + "0" + s;
  } else if (s / 10 < 1) {
    return m + ':' + "0" + s;
  } else {
    return m + ':' + s;
  }
});
