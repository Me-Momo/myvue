<template lang="html">
      <div class="container">
        <div id="swipe" class='row'>
           <div class="swipe-wrapper">
           <div class="swipe-list">
               <a href="#">
                   <img src="https://y.gtimg.cn/music/common/upload/t_focus_info_iphone/67011.jpg" alt="" class="swipe_list_pic">
               </a>
               <a href="#">
                   <img src="https://shp.qpic.cn/qqvideo_ori/0/f0022oefyfr_360_204/0" alt="" class="swipe_list_pic">
               </a>
               <a href="#">
                   <img src="https://y.gtimg.cn/music/common/upload/t_focus_info_iphone/71977.jpg" alt="" class="swipe_list_pic">
               </a>
               <a href="#">
                   <img src="https://shp.qpic.cn/qqvideo_ori/0/r0022psn0aw_360_204/0" alt="" class="swipe_list_pic">
               </a>
               <a href="#">
                   <img src="https://y.gtimg.cn/music/common/upload/t_focus_info_iphone/72544.jpg" alt="" class="swipe_list_pic">
               </a>
           </div>
           <ol class='swipe-indicator'>
               <li data-index="0"></li>
               <li data-index="1"></li>
               <li data-index="2"></li>
               <li data-index="3"></li>
               <li data-index="4"></li>
           </ol>
           <nav class="swipe-action hidden-sm-down">
               <a href="#" class="prev"><span>&laquo;</span></a>
               <a href="#" class='next'><span>&raquo;</span></a>
           </nav>
       </div>
        </div>
         <div class="row">
          <h5>推荐歌单</h5>
          <playlist :playList="playLists[0]"></playlist>
          <div class="clearfix"></div>
          <h5>热门歌单</h5>
          <playlist :playList="playLists[1]"></playlist>
          </div>
    </div> <!-- /container -->
</template>

<script>
import {
  Indicator
} from 'mint-ui';

import playlist from '../components/playlist'
import plist0 from '../json/plist'
import plist1 from '../json/plist1'

import {
  INIT
} from '../mixins'

export default {
  mixins: [INIT],
  components: {
     playlist
  },
  methods:{
    getList() {
      Indicator.open({
        text: '加载中...',
        spinnerType: 'snake'
      });
      this.parseList(plist0);
      this.parseList(plist1);
    },
    parseList(data) {
      setTimeout(() => {
        Indicator.close();
        this.playLists.push(data);
      }, 2000);
    }
  }
}

</script>
<style scoped>
.row{
  display: block;
}
h5::before {
    content: '';
    width: calc(1.5rem - 6px);
    height: calc(1.5rem - 6px);
    vertical-align: middle;
    border: 4px solid rgb(193, 13, 12);
    border-radius: 50%;
    display: inline-block;
    margin: 0 9px 0 4px;
}
h5 {
  border-bottom: 2.5px solid rgb(193, 13, 12);
    padding: 8px 0;
    margin-left: 17px;
    margin-right: 17px;
}
@media(min-device-width :996px) {
  html {
    font-size: 102.4px;
  }
}

@media(min-device-width :667px) and (max-device-width :996px) {
  html {
    font-size: 66.7px;
  }
}

@media(min-device-width :375px) and (max-device-width :667px) {
  html {
    font-size: 37.5px;
  }
}
</style>
