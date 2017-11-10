var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/getNavList',function (req,res) {
    res.send({
        code:'200',
        data:[
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
        ],
        message:'success'
    })
})

router.get('/getBanner',function (req, res) {
    res.send({
        code: '200',
        data: [{
            text: '文字',
            color: 'red'
            },

            {
                text: '文字1',
                color: 'yellow'
            },

            {
                text: '文字2',
                color: 'blue'
            }]
    })
})

router.get('/getNav',function (req, res) {
    res.send({
        codo:'200',
        data:[{
            color:'#222',
            tit:'美食'
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
        },{
            color:'#222',
            tit:'机票/火车票'
        },{
            color:'#222',
            tit:'KTV'
        },{
            color:'#222',
            tit:'周边游'
        },{
            color:'#222',
            tit:'丽人/美发'
        },{
            color:'#222',
            tit:'旅游出行'
        },{
            color:'#222',
            tit:'美食1'
        },{
            color:'#222',
            tit:'猫眼电影1'
        },{
            color:'#222',
            tit:'酒店入驻1'
        },{
            color:'#222',
            tit:'休闲娱乐1'
        },{
            color:'#222',
            tit:'外卖1'
        },{
            color:'#222',
            tit:'机票/火车票'
        },{
            color:'#222',
            tit:'KTV1'
        },{
            color:'#222',
            tit:'周边游1'
        },{
            color:'#222',
            tit:'丽人/美发'
        },{
            color:'#222',
            tit:'旅游出行1'
        }]
    })
})


module.exports = router;
