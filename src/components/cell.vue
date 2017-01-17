<template lang="html">
  <div class="cell">
        <div class="cur"><slot name='cur'></slot></div>
        <div class="img"><slot name='img'></slot><slot></slot></div>
        <div class="cell-info">
          <slot name='title'></slot>
          <slot name='title_'></slot>
        </div>
        <div class="cell-more">
        <slot class="cell-more"></slot></div>
        <span class='icon'><slot name="icon"></slot></span>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="css">
.cell{
  height: 50px;
  position: relative;
  line-height: 50px;
  clear: left;
  color: rgb(27, 22, 21);
 background: linear-gradient(to right ,rgb(255, 255, 255) 6px,rgba(255, 134, 125, 0.93) 0);
  cursor: pointer;
  -webkit-transition: all .2s ease;
  transition: all .2s ease;
  overflow: hidden;
  font-size: 12px;
  line-height: 0;
  border-top: 1px solid rgb(233, 233, 233);
}
 .cell>.cur,.cell>.img,.cell>.icon,.cell-info{
   position: absolute;
   bottom: 0;
   top: 0;
 }
 .cell>.cur>*,.cell>.img>*,.cell>.icon>*{
   width:100%;
   height:100%;
 }
 .cell>.cur{
   width: 3px;
   height:80%;
   top:10%;
 }
 .cell>.img{
   left: 5px;
   width: 50px;
   height: 50px;
   text-align: center;
   color: #666;
   cursor: pointer;
 }
 .cell-info{
   color: #000;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    padding:6px 3px;
    left: 66px;
    text-align: left;
    display: -ms-flexbox;
    display: flex;
    font-size: 17px;
    line-height: 100%;
    top: 0;
    flex-direction: column;
 }
  .cell-info>*{
    flex:1;
  }.cell-info>*:nth-child(2) {
    font-size: 0.8em;
    margin-top: 5px;
    color:#666;
  }
.cell>.more{
   right: 35px;
   width: 30px;
   text-align: right;
   line-height: 30px;
 }
.cell>.icon{
 right: 8px;
width: 24px;
height: 100%;
line-height: 100%;
font-size: 18px;
text-align: center;
position: absolute;
}
.cell>.icon>*{
  width: 100%;
  height: 100%;
  color:red;
}
.glyphicon:before{
  line-height: 50px;
}
</style>
