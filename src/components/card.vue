<template lang="html">
  <div class="card">
    <div>
       <div class='img'><slot name='img'></slot></div>
       <div class="extra"><slot name='icon'></slot><slot name='tips'></slot></div>
       <div class="title"><slot name='title'></slot></div>
    </div>
    <div class="text"><slot name="text"></slot></div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="css">
.card {
    height: 45%;
    margin: 10px;
    border: none;
}
.card>div:first-child{
    width:100%;
    height:calc(100% - 30px);
    position: relative;
    text-align: center;
    color:rgb(244, 67, 54)
}
.card .img,.card .img>img{
  width:100%;
  height:100% !important;
}

.card .title {
    position: absolute;
    text-align: center;
    height: 25px;
    line-height: 25px;
    width: 100%;
    bottom: 0;
    padding: 0 10px;
}
.card .extra {
    position: absolute;
    height: 20px;
    width: 20px;
    right: 35px;
    top: 6px;
}
.card .extra>span{
  display: inline;
  margin: 0 5px;
}
.card>.text {
    position: relative;
    width: 100%;
    padding: 5px;
    min-height: 40px;
    text-align: center;
    color: rgb(0, 0, 0);
    word-spacing: 7px;
}


</style>
