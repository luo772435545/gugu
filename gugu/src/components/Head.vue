<template>
    <div class="head">
        <div class="city">北京 ^</div>
        <div class="search-input">
          <img src="../../static/images/search.png"/>
          <input type="text" placeholder="正宗盐酥鸡"/>
        </div>
        <div class="sao"><img  src="../../static/images/saoyisao.png"/> 扫码</div>
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
  @import "src/style/mixin";
  *{box-sizing: border-box}
  .head{width: 100%;
    font-size: 12px;
    display: flex;
    height: 0.42rem;
    line-height: 0.42rem;
    justify-content: space-between;
    text-align: center;
    @include font-dpr(12px);
    .search-input{
      width: 70%;
      border: 1px solid #ddd;
      height: 0.42rem;
      overflow: hidden;
      position: relative;
      input{border: 0;height: 0.42rem;width: 100%;text-indent: 0.35rem}
      img{width: 0.26rem;position: absolute;left: 0.05rem;top: 0.09rem}
    }
    .city{width: 15%}
    .sao{
      width: 15%;
      img{width: 0.26rem;
        vertical-align: text-bottom;
      }
    }
  }

</style>
