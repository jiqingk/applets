Page({
  //Echart图表案例
  EchartsDemo:function(e){
    wx.navigateTo({
      url: '/pages/echarts/echarts/echartFresh/freshData',
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })
  },
  //上传图片
  uploadPic:function(e){
    wx.navigateTo({
      url: '/pages/uploadPic/uploadPic',
    })
  },
  //轮播组件
  swiperDemo:function(e){
    wx.navigateTo({
      url: '/pages/swiper/swiper',
    })
  },
  //模拟点餐
  orderDemo:function(e){
    wx.navigateTo({
      url: '/pages/sort/sort',
    })
  },
  /**查看物流 */
  logisiticsGZFn: function (e) {
    var Traces = [{
      "time": "2014/06/25 08:05:37",
      "context": "正在派件..(派件人:邓裕富,电话:18718866310)[深圳 市]",
      "Remark": null
    },
    {
      "time": "2014/06/25 04:01:28",
      "context": "快件在 深圳集散中心 ,准备送往下一站 深圳 [深圳市]",
      "Remark": null
    },
    {
      "time": "2014/06/25 01:41:06",
      "context": "快件在 深圳集散中心 [深圳市]",
      "Remark": null
    },
    {
      "time": "2014/06/24 20:18:58",
      "context": "已收件[深圳市]",
      "Remark": null
    },
    {
      "time": "2014/06/24 20:55:28",
      "context": "快件在 深圳 ,准备送往下一站 深圳集散中心 [深圳市]",
      "Remark": null
    },
    {
      "time": "2014/06/25 10:23:03",
      "context": "派件已签收[深圳市]",
      "Remark": null
    },
    {
      "time": "2014/06/25 10:23:03",
      "context": "签收人是：已签收[深圳市]",
      "Remark": null
    }
    ];
    var dataList = encodeURIComponent(JSON.stringify(Traces));//函数可把字符串作为 URI 组件进行编码
    wx.navigateTo({
      url: '../logistics/logistics?dataList=' + dataList,

    })
  },
})