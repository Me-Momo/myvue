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
  }, //end EventUtil
  'LyricUtil': {
    /*
     @param string
    */
    createLyric: function (lyric) {
      var timeArr = [],
        lyricArr = [];
      var tempArr = lyric.split('\n');
      tempArr.map(function (item) {
        var tempStr = item || "";
        if (tempStr.charAt(9)
          .match(/\d/) != null) {
          //考虑歌词秒数精确到小数点后三位 index=9若为数字 进行删除
          tempStr = tempStr.slice(0, 9) + tempStr.slice(10)
        }
        var time = tempStr.slice(1, 9)
          .split(':')
        console.log([time, parseInt(time[0]), parseInt(time[1])])
        time = (parseInt(time[0]) * 60 + parseInt(time[1])) * 1000
        timeArr.push(time);
        lyricArr.push(tempStr.slice(
          10));
      }); //end map
      return {
        timeArr: timeArr,
        lyricArr: lyricArr
      }
    },
    renderLyric: function (lyricMap) {
      var lyricArr = lyricMap.lyricArr,
        timeArr = lyricMap.timeArr;
      var template = "";
      lyricArr.map(function (index, lyric) {
        var lyricContent = lyric === "" ?
          "----------------------------" : lyric;
        template += "<p class='' data-point='" + timeArr[index] +
          "'>" + lyricContent + "</p>";
      });
      return template;
    }
  }
}
