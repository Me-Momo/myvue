<template lang="html">

  <div class="container">
  	<div class="row clearfix">

  		<div class="col-md-8 col-sm-12">
  			<div class="media">
  				<img  src="../assets/images/myMusic.jpg" class="media-object img-thumbnail" alt='' />
  				<div class="media-body">
  					<h4 class="media-heading">
  						我喜欢的歌单
  					</h4>
            <button class="btn btn-primary" @click='playAudio'>播放</button>
  				</div>
  			</div>
  		</div>
      <div class="col-md-4 col-sm-12  pull-left">
        <div class="panel-group" id="accordion">
        	<div class="panel panel-default">
        		<div class="panel-heading">
        			<h4 class="panel-title">
        				<a data-toggle="collapse" data-parent="#accordion"
        				   href="myFavList">
        					 我的收藏
        				</a>
        			</h4>
        		</div>
        		<div id="myFavList" class="panel-collapse collapse">
        			<div class="panel-body">
        				Nihil anim keffiyeh helvetica, craft beer labore wes anderson
        				cred nesciunt sapiente ea proident. Ad vegan excepteur butcher
        				vice lomo.
        			</div>
        		</div>
        	</div>
	<div class="panel panel-default">
		<div class="panel-heading">
			<h4 class="panel-title">
				<a data-toggle="collapse" data-parent="#accordion"
				   href="#recentList">
				    最近播放
				</a>
			</h4>
		</div>
		<div id="recentList" class="panel-collapse collapse">
			<div class="panel-body">
				Nihil anim keffiyeh helvetica, craft beer labore wes anderson
				cred nesciunt sapiente ea proident. Ad vegan excepteur butcher
				vice lomo.
			</div>
		</div>
	</div>
</div>

      </div>
  	</div>
    <div class="row clearfix">
    </div>
  </div>


</template>

<script>
import cell from '../components/cell'
import { AUDIO } from '../mixins'
export default {
  mixins: [AUDIO],
  data() {
    return {
      playlist: {
        title: ''
      }
    }
  },
  components: {
    cell
  },
  methods:{

  }
}
</script>

<style scrope>
.media-body {
    margin-left: 20px;
}
.media-heading::before {
    width: 54px;
    height: 24px;
    background: linear-grei;
    display: inline-block;
    content: '歌单';
    font-size: 16px;
    line-height: 24px;
    text-align: center;
}
</style>
