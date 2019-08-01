
// pages/index/to_news/to_news.js  

var app = getApp();

var util = require("../../utils/util.js");

var socketOpen = false;

var uuid = '',

  time_ = "1";

var recorder = wx.getRecorderManager();

const innerAudioContext = wx.createInnerAudioContext() //获取播放对象

var frameBuffer_Data, session, SocketTask, string_base64;

Page({

  data: {

    login: false,

    listCustmerServiceBanner: [],

    indicatorDots: false,

    autoplay: false,

    interval: 5000,

    duration: 1000,

    user_input_text: '', //用户输入文字

    inputValue: '',

    time: '',

    returnValue: '',

    if_send: false,

    add: true,

    cross: false,

    // is_my: true, text: '12432'

    allContentList: [{}, { is_ai: [] }],

    num: 0

  },

  // 页面加载

  onLoad: function (e) {

    var that = this;

    if (wx, wx.getStorageSync('openid')) {

      this.setData({

        login: false

      })

    } else {

      this.setData({

        login: true

      })

    }

    let url = app.url + '/show.php'

    util.request(url, 'post', {}, '正在加载···', function (res) {

      for (var i = 0; i < res.data.length; i++) {

        console.log(i, res.data[i].iv, wx.getStorageSync('openid'))

        if (res.data[i].iv == wx.getStorageSync('openid')) {

          res.data[i].is_my = true

        } else {

          res.data[i].is_ai = true

        }

      }

      that.setData({

        allContentList: res.data,

        inputValue: ''

      })

      that.bottom()

    })

  },

  // 获取用户信息并且登录，获取openid

  userinfo: function (e) {

    var that = this;

    var nickName = JSON.parse(e.detail.rawData).nickName;

    var avatarUrl = JSON.parse(e.detail.rawData).avatarUrl;

    console.log('nickName:', nickName, 'avatarUrl:', avatarUrl)

    wx.setStorageSync('nickName', nickName)

    wx.setStorageSync('avatarUrl', avatarUrl)

    wx.login({

      success: function (res) {

        let url = app.url + '/login.php'

        if (res.code) {

          util.request(url, 'post', {

            code: res.code

          }, '正在登录···', function (res) {

            console.log(res.data)

            if (res.data.openid) {

              var openid = res.data.openid;

              wx.setStorageSync('openid', openid);

              if (avatarUrl && openid) {

                wx.showToast({

                  title: '登录成功！',

                })

                that.setData({

                  login: false

                })

              }

            }

          })

        }

      }

    });

  },

  // 页面加载完成

  onReady: function () {

    var that = this;

    this.on_recorder();

    this.bottom()

  },



  // 提交文字

  submitTo: function (e) {

    console.log('提交文字')

    let that = this;

    if (that.data.inputValue == "") {

      return;

    }

    var url = app.url + '/up_text.php'

    var data = {

      avatarUrl: wx.getStorageSync('avatarUrl'),

      iv: wx.getStorageSync('openid'),

      inputValue: that.data.inputValue,

      time: (new Date()).getTime()

    }

    console.log('提交文字data:', data)

    util.request(url, 'post', data, '', function (res) {

      // res.data = res.data.reverse();

      for (var i = 0; i < res.data.length; i++) {

        console.log(i, res.data[i].iv, wx.getStorageSync('openid'))

        if (res.data[i].iv == wx.getStorageSync('openid')) {

          res.data[i].is_my = true

        } else {

          res.data[i].is_ai = true

        }

      }

      that.setData({

        allContentList: res.data,

        inputValue: ''

      })

      that.bottom()

    }, function (res) { })

  },



  // 点击加号

  add_icon_click: function (e) {

    console.log(e.target.id)

    // e.target.id == 1 点击加号   ==2  点击 X

    if (e.target.id == 2) {

      this.setData({

        add: true,

        cross: false,

        input_bottom: 0

      })

    } else if (e.target.id == 1) {

      this.setData({

        add: false,

        cross: true,

        input_bottom: 240

      })

    }

  },

  // 输入框

  bindKeyInput: function (e) {

    console.log(e.detail.value)

    if (e.detail.value == "") {

      this.setData({

        if_send: false,

        inputValue: e.detail.value

      })

    } else {

      this.setData({

        if_send: true,

        inputValue: e.detail.value

      })

    }

  },

  // 获取到焦点

  focus: function (e) {

    var that = this;

    console.log(e.detail.height)

    this.setData({

      focus: true,

      add: true,

      cross: false,

      input_bottom: e.detail.height

    })

  },

  // 失去焦点

  no_focus: function (e) {

    if (this.data.cross) {

      this.setData({

        focus: false,

        input_bottom: 240,

      })

    } else {

      this.setData({

        focus: false,

        input_bottom: 0

      })

    }

  },

  onHide: function () { },

  // 获取hei的id节点然后屏幕焦点调转到这个节点  

  bottom: function () {

    var that = this;

    this.setData({

      scrollTop: 100000

    })

  },

  hide_bg: function () {

    this.setData({

      block: false

    })

  },

  // 点击录音事件

  my_audio_click: function (e) {

    console.log('my_audio_click执行了', e)

    var index = e.currentTarget.dataset.id;

    console.log('url地址', this.data.allContentList[index].audio);

    innerAudioContext.src = this.data.allContentList[index].audio

    innerAudioContext.seek(0);

    innerAudioContext.play();

  },

  // 手指点击录音

  voice_ing_start: function () {

    var that = this;

    this.setData({

      voice_ing_start_date: new Date().getTime(), //记录开始点击的时间

    })

    const options = {

      duration: 10000, //指定录音的时长，单位 ms

      sampleRate: 16000, //采样率

      numberOfChannels: 1, //录音通道数

      encodeBitRate: 24000, //编码码率

      format: 'mp3', //音频格式，有效值 aac/mp3

      frameSize: 12, //指定帧大小，单位 KB

    }

    recorder.start(options) //开始录音



    this.animation = wx.createAnimation({

      duration: 1200,

    }) //播放按钮动画

    that.animation.scale(0.8, 0.8); //还原

    that.setData({



      spreakingAnimation: that.animation.export()

    })

  },

  // 录音监听事件

  on_recorder: function () {

    recorder.onStart((res) => {

      console.log('开始录音');

    })

    recorder.onStop((res) => {

      console.log('停止录音,临时路径', res.tempFilePath);

      // _tempFilePath = res.tempFilePath;

      var x = new Date().getTime() - this.data.voice_ing_start_date

      if (x > 1000) {

        that.data.allContentList.push({

          is_my: true,

          audio: res.tempFilePath,

          length: x / 1000 * 30

        });

        that.setData({

          allContentList: that.data.allContentList

        })

      }

    })

    recorder.onFrameRecorded((res) => {

      var x = new Date().getTime() - this.data.voice_ing_start_date

      if (x > 1000) {

        console.log('onFrameRecorded  res.frameBuffer', res.frameBuffer);

        string_base64 = wx.arrayBufferToBase64(res.frameBuffer)



        // console.log('string_base64--', wx.arrayBufferToBase64(string_base64))

        if (res.isLastFrame) {

          var data = {

            audioType: 3,

            cmd: 1,

            type: 2,

            signType: 'BASE64',

            session: session,

            body: string_base64,

          }

          console.log('that.data.allContentList', that.data.allContentList)

          // 进行下一步操作

        } else {

          var data = {

            cmd: 1,

            audioType: 2,

            type: 2,

            signType: 'BASE64',

            session: session,

            body: string_base64

          }

          console.log('录音上传的data:', data)

        }

      }

    })

  },

  // 手指松开录音

  voice_ing_end: function () {

    var that = this;

    that.setData({

      voice_icon_click: false,

      animationData: {}

    })

    this.animation = "";

    var x = new Date().getTime() - this.data.voice_ing_start_date

    if (x < 1000) {

      console.log('录音停止，说话小于1秒！')

      wx.showModal({

        title: '提示',

        content: '说话要大于1秒！',

      })

      recorder.stop();

    } else {

      // 录音停止，开始上传

      recorder.stop();

    }

  },

  // 点击语音图片

  voice_icon_click: function () {

    this.setData({

      voice_icon_click: !this.data.voice_icon_click

    })

  },

})
