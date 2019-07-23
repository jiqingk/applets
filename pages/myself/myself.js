// pages/myself/myself.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    statusList: [{ //顶部状态按钮
        "statusName": "全部",
        "id": "all"
      },
      {
        "statusName": "待支付",
        "id": "draft"
      },
      {
        "statusName": "待发货",
        "id": "waitSolve"
      },
      {
        "statusName": "已发货",
        "id": "doingSolve"
      },
      {
        "statusName": "交易成功",
        "id": "doneSolve"
      },
    ],
    isChecked: 0, //判断是否选中
    
  },
  //绑定顶部状态切换的点击事件
  choiceStatus: function(e) {
    var that = this;
    var code = e.currentTarget.id;
    that.setData({
      isChecked: code
    })
  },
  /**查看物流 */
  logisiticsGZFn: function(e) {
    var Traces= [{
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
    var dataList=encodeURIComponent(JSON.stringify(Traces));//函数可把字符串作为 URI 组件进行编码
    wx.navigateTo({
      url: '../logistics/logistics?dataList=' + dataList,

    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})