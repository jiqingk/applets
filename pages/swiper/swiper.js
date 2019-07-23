// pages/home/home.js
var autoplay;
var idx;
var numMax;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    idx: "1",
    numMax: "4",
    slider: [{
        type: '1',
        picUrl: '../../video/spp.mp4'
      },
      {
        type: '0',
        picUrl: '../images/1.jpg'
      },
      {
        type: '0',
        picUrl: '../images/2.jpg'
      },
      {
        type: '0',
        picUrl: '../images/3.jpg'
      },
    ],
    recommendList: [

      {
        cate_id: '3',
        id: 1,
        image: '../images/p1.jpg',
        price: '0.01',
        sort: '10',
        store_name: '测试',
        unit_name: "件"
      },

      {
        cate_id: '3',
        id: 2,
        image: '../images/p2.jpg',
        price: '0.01',
        sort: '10',
        store_name: '测试2',
        unit_name: "件"
      },
      {
        cate_id: '3',
        id: 3,
        image: '../images/p3.jpg',
        price: '0.01',
        sort: '10',
        store_name: '测试3',
        unit_name: "件"
      }
    ],
    autoplay: false,
    swiperCurrent: 0,
  },
  //轮播 侧滑事件
  swiperChange: function(e) {
    if(e.detail.source == "touch"){
      //防止swiper控件卡死
      if(this.data.current === 0 && this.data.preIndex >1){
        //卡死时，重置current为正确索引
        this.setData({ idx: this.data.preIndex})
      } else {//正常轮转时，记录正确页码索引
        var index = e.detail.current
        this.setData({
          idx: index + 1
        })
      }
    }
    
  },

  //轮播 点击事件
  clickSwiper: function(event) {
    var index= event.target.dataset.index;//this.data.swiperCurrent
    wx.showToast({
      title: '元素下标：' + index + "",
    })

  
  },
})