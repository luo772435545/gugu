<template>
    <div>
        <ul class="nav">
          <li class="list-item "    v-for="(item,index) in items" >
            <div >
              <router-link :to="item.url">
                <div class="tit">{{item.tit}}</div>
                <img :src="item.src" />
              </router-link>
            </div>
          </li>
        </ul>
    </div>
</template>

<script>

    import {mapActions} from  'vuex'
    export default {
        data () {
            return {
                /*items:[
                  {
                      tit:'首页',
                      src:'../../static/images/news.png',
                      url:'/home'
                  },

                  {
                    tit:'附近',
                    src:'../../static/images/news.png',
                    url:'/fujin'
                  },

                  {
                    tit:'订单',
                    src:'../../static/images/phone.png',
                    url:'/order'
                  },
                  {
                    tit:'我的',
                    src:'../../static/images/men.png',
                    url:'/user'
                  }
                ],*/
              /*item:
                {
                  url:'/home',
                  tit:'订单',
                  src:'../../static/images/phone.png'
                }*/

            }
        },
        methods: {
          getDate:function () {
            this.$store.dispatch('getNavList').then(function () {
            })
          }

          /*...mapActions({
            getDate:'getNavList'
          })*/
        },
        mounted: function () {
            this.getDate();
        },
        computed:{
          items(){
              var _data=this.$store.state.index.navItems
              if(_data!=''){
                return _data
              }

          },

        }

    }
</script>

<style lang="scss" scoped="">
  @import "src/style/mixin";
  .nav{
    position: fixed;
    padding: 0;
    width: 100%;
    z-index: 99;
    display: flex;
    justify-content: center;
    bottom: 0;
    left: 0;
    height: 0.7rem;
    line-height: 0.9rem;
    border-top: 1px solid #ddd;
    @include font-dpr(12px);
    .active{
      background-color: aquamarine;
    }
      .list-item{
        width: 25%;
        list-style: none;
        position: relative;
        img{width: 0.26rem;height: 0.26rem;position: absolute;bottom: 0.35rem;left: 50%;margin-left: -0.13rem;}

  }

  }
</style>
