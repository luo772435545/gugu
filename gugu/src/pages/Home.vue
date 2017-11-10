<template>
    <div>
      <div class="swiper-container swiper-aa">
        <div class="swiper-wrapper">
          <div v-for="item in back" class="swiper-slide">
            <div :style="{backgroundColor: item.color}" >{{item.text}}</div>
          </div>
        </div>
      </div>
      <div class="main-nav swiper-container">
        <div class="swiper-wrapper">
          <div v-for="item in navTest" class="swiper-slide">
              <ul class="nav-fir">
                <li class="list-item" v-for="el in item[0]">
                  <span :style="{backgroundColor:el.color}"  class="el-box"></span>
                  <span>{{el.tit}}</span>
                </li>
              </ul>
              <ul class="nav-fir">
                <li class="list-item" v-for="el in item[1]">
                  <span :style="{backgroundColor:el.color}" class="el-box"></span>
                  <span>{{el.tit}}</span>
                </li>
              </ul>
          </div>
        </div>
        <div class="swiper-pagination"></div>
      </div>
    </div>
</template>

<script>
    import Swiper from '../../static/js/swiper.min'
    import 'axios'
    export default {
        data () {
            return {
                navTest:[[[{
                  color:'#222',
                  tit:'美食1'
                },{
                  color:'#222',
                  tit:'猫眼电影'
                },{
                  color:'#222',
                  tit:'酒店入驻'
                },{
                  color:'#222',
                  tit:'休闲娱乐'
                },{
                  color:'#222',
                  tit:'外卖'
                }],[{
                  color:'#999',
                  tit:'美食'
                },{
                  color:'#955',
                  tit:'猫眼电影'
                },{
                  color:'#905',
                  tit:'酒店入驻'
                },{
                  color:'#222',
                  tit:'休闲娱乐'
                },{
                  color:'#222',
                  tit:'外卖'
                }]],[[{
                  color:'#888',
                  tit:'美食1'
                },{
                  color:'#345',
                  tit:'猫眼电影'
                },{
                  color:'#678',
                  tit:'酒店入驻'
                },{
                  color:'#222',
                  tit:'休闲娱乐'
                },{
                  color:'#007',
                  tit:'外卖'
                }],[{
                  color:'#999',
                  tit:'美食'
                },{
                  color:'#955',
                  tit:'猫眼电影'
                },{
                  color:'#905',
                  tit:'酒店入驻'
                },{
                  color:'#506',
                  tit:'休闲娱乐'
                },{
                  color:'#222',
                  tit:'外卖'
                }]]]
            }
        },
        methods: {
            lunbo(){
              this.$store.dispatch('getBannerList').then(function () {
              setTimeout(function () {
                var swiper = new Swiper('.swiper-aa');
              },0)
              })
            }/*,
            nav(){
              axios.get('http://localhost:3400/getNav').then(function (res) {

              })
            }*/
        },
        mounted: function () {
          this.lunbo();
          setTimeout(function () {
            var swiper = new Swiper('.main-nav',{
              pagination: {
                el: '.swiper-pagination',
              },
            });
          },20)
        },
      computed:{
        back(){
            var _data=this.$store.getters.banner;
              return _data
        }
      }
    }
</script>

<style scoped lang="scss">
  @import "../../static/css/swiper.min.css";
  @import "../style/mixin";
  .swiper-aa{
    border-top: 1px solid #ddd;
    border-bottom: 1px solid #ddd;
  }
  .swiper-container {
    width: 100%;
    height: 2rem;
  }
  .swiper-slide {
    text-align: center;
    font-size: 18px;
    background: #fff;
    color: white;
    /* Center slide text vertically */
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;
  }
  .swiper-slide div{width: 100%;height: 100%}
  .main-nav{padding: 0.1rem 0;
    width: 100%;overflow: hidden;
    .swiper-slide{display: block}
  }
  .nav-fir{
    display: flex;
    width: 100%;
    justify-content: center;
    height:0.75rem;
    .list-item{
      width: 20%;
      text-align: center;
      .el-box{width: 0.3rem;height: 0.3rem;display: block;background-color: #00B7FF;margin: 0 auto}
      span{color: #000; @include font-dpr(12px)}
    }

  }


</style>
