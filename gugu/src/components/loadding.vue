<template>
    <div class="box">
      <div class="loader loader-17">
        <div class="css-square square1"></div>
        <div class="css-square square2"></div>
        <div class="css-square square3"></div>
        <div class="css-square square4"></div>
        <div class="css-square square5"></div>
        <div class="css-square square6"></div>
        <div class="css-square square7"></div>
        <div class="css-square square8"></div>
      </div>
    </div>
</template>

<script>
    export default {
        data () {
            return {}
        },
        methods: {},
        mounted: function () {

        }
    }
</script>

<style lang="scss" scoped>
  .box{
    position: fixed;
    background-color: rgba(0,0,0,0.2);
    width: 100%;
    top: 0;
    height: 100%;
    left: 0;
    z-index: 100;
  .loader { position: absolute; width: 60px; height: 60px; border-radius: 50%; display: inline-block; vertical-align: middle; top: 50%;left: 50%;margin-left: -30px;margin-top: -30px;}
  .loader-17 .css-square { position: absolute; top: 50%; width: 25px; height: 7px; background: white; box-shadow: 2px 2px 3px 0px black; }
  .loader-17 .square1 { left: 70px; -webkit-animation: dominos 1s 0.125s ease infinite; animation: dominos 1s 0.125s ease infinite; }
  .loader-17 .square2 { left: 60px; -webkit-animation: dominos 1s 0.3s ease infinite; animation: dominos 1s 0.3s ease infinite; }
  .loader-17 .square3 { left: 50px; -webkit-animation: dominos 1s 0.425s ease infinite; animation: dominos 1s 0.425s ease infinite; }
  .loader-17 .square4 { left: 40px; -webkit-animation: dominos 1s 0.540s ease infinite; animation: dominos 1s 0.540s ease infinite; }
  .loader-17 .square5 { left: 30px; -webkit-animation: dominos 1s 0.665s ease infinite; animation: dominos 1s 0.665s ease infinite; }
  .loader-17 .square6 { left: 20px; -webkit-animation: dominos 1s 0.79s ease infinite; animation: dominos 1s 0.79s ease infinite; }
  .loader-17 .square7 { left: 10px; -webkit-animation: dominos 1s 0.9s ease infinite; animation: dominos 1s 0.9s ease infinite; }
  .loader-17 .square8 { left: 0px; -webkit-animation: dominos 1s 1s ease infinite; animation: dominos 1s 1s ease infinite; }
  }
  @-webkit-keyframes dominos {
    50% {
      opacity: 0.7;
    }
    75% {
      -webkit-transform: rotate(90deg);
      transform: rotate(90deg);
    }
    80% {
      opacity: 1;
    }
  }
</style>
