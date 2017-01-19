<template lang="html">
  <div class="my">
<!--
  <card>
    <img slot='img' alt="">
    <span slot="icon" class="glyphicon glyphicon-info-sign"></span>
    <span slot="tips">{{ playlist }}</span>
    <div slot="text">{{ playlist.title }}</div>
  </card> -->




  <div class="container">
  	<div class="row clearfix">

  		<div class="col-md-8 col-sm-12">
  			<div class="media">
  				 <a href="#" class="pull-left"><img  src="http://p3.music.126.net/8UaJe7gMPwcVfdEQIGEREg==/5667982441251386.jpg" class="media-object" alt='' /></a>
  				<div class="media-body">
  					<h4 class="media-heading">
  						Nested media heading
  					</h4> Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis.
  				</div>
  			</div>
  		</div>
      <div class="col-md-4 col-sm-12  pull-left">
        <cell>
          <span slot='img' class='glyphicon glyphicon-download'></span>
          <span slot='title'>下载音乐</span>
          <span slot='cell-more'>0</span>
        </cell>
        <cell>
          <span slot='img' class='glyphicon glyphicon-download'></span>
          <span slot='title'>我的歌手</span>
          <span slot='cell-more'>0</span>
        </cell>
      </div>
  	</div>
    <div class="row clearfix">
    </div>
  </div>


  </div>
</template>

<script>
import cell from '../components/cell'
export default {
  data(){
  return {
       playlist:{title:''}
    }
  },
  components:{
    cell
  }
}
</script>

<style lang="css">
</style>
