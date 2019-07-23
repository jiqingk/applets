// pages/uploadPic/uploadPic.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isChoose: 0,
    pictures: [],
  },

  //图片上传
  choose: function () {
    var that = this;
    wx.showActionSheet({
      itemList: ['拍照', '从相册中选择'],
      itemColor: "#f7982a",
      success: function (res) {
        if (!res.cancel) {
          if (res.tapIndex == 0) {
            that.chooseWxImageShop('camera');
          } else if (res.tapIndex == 1) {
            that.chooseWxImageShop('album');
          }
        }
      }
    })
  },

  chooseWxImageShop: function (type) {
    var that = this;
    wx.chooseImage({
      count: 6,
      sizeType: ['original', 'compressed'],
      sourceType: [type],
      success: function (res) {
        var tempFilePaths = res.tempFilePaths;
        var picSize = res.tempFiles[0].size / 1024;
        if (picSize < 500) {
          that.setData({
            pictures: tempFilePaths,
            isChoose: 1
          })
        } else {
          wx.showModal({
            title: '提示',
            showCancel: false,
            content: '照片最大上传500KB，请您剪裁或者压缩后再进行上传!',
            success: function (res) {
              if (res.confirm) { } else { }
            }
          })
        }
      }
    })
  },

  previewImage: function (e) {
    var that = this,
      //获取当前图片的下表
      index = e.currentTarget.dataset.index,
      //数据源
      pictures = that.data.pictures;
    wx.previewImage({
      //当前显示下表
      current: pictures[index],
      //数据源
      urls: pictures
    })
  },
  //区划
  deleteImgFunc: function () {
    this.setData({
      pictures: [],
      isChoose: 0,
    });
  },
})