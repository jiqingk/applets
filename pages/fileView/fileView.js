Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  //简历预览
  preview: function() {
    var that = this;
    console.log("简历预览")

    //这里的value是先在data里面初始化，然后我根据用户切换单选框，获取的简历文件的主键id
    console.log(this.data.value)
    var id = that.data.value;

    if (id == "") {
      wx.showModal({
        title: '',
        content: '请选择一份简历',
        showCancel: false,
        confirmColor: "#FFB100"
      })
    } else {

      //先通过简历的主键id,查询简历路径（大家可以根据自己的需求来传数据）
      wx.request({
        url:'',
       // url: app.globalData.url + "/api/interview/queryFilePath",
        data: {
          id: id
        },
        method: 'POST',
        header: {
          "content-type": "application/x-www-form-urlencoded"
        },
        success: function(res) {
          console.log(res.data)
          that.setData({
            path: res.data.path,
            type: res.data.type
          })
          //下载简历
          wx.downloadFile({
            url: app.globalData.url + that.data.path,
            success: function(res) {
              var filePath = res.tempFilePath
              console.log(filePath)

              //预览简历
              wx.openDocument({
                filePath: filePath,
                fileType: that.data.type,
                success: function(res) {
                  console.log("打开文档成功")
                  console.log(res);
                },
                fail: function(res) {
                  console.log("fail");
                  console.log(res)
                },
                complete: function(res) {
                  console.log("complete");
                  console.log(res)
                }
              })
            },
            fail: function(res) {
              console.log('fail')
              console.log(res)
            },
            complete: function(res) {
              console.log('complete')
              console.log(res)
            }
          })
        }
      })
    }
  },

})