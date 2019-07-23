// pages/test/test.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    indexSize: 0,
    indicatorDots: false,
    autoplay: false,
    duration: 0, //可以控制动画
    list: '',
    detail: [
      {
        id: 1,
        title: '宴会舞台区',
        list: [
          {
            title: '舞台truss架子',
            subtitle: '坚固安全 质地优质',
          },
          {
            title: '背景架',
            subtitle: '专业调配 质量保证',
          },
          {
            title: '浪漫星空',
            subtitle: '营造温馨浪漫感',
          },
          {
            title: '欧式吊幔',
            subtitle: '低调奢华 高端品质',
          },
          {
            title: '桁架',
            subtitle: '背景支架 坚实牢固',
          },
          {
            title: '精美珠光地毯',
            subtitle: '珠光闪耀 高端时尚',
          },
          {
            title: '梦幻水晶灯',
            subtitle: '奢华璀璨 高贵典雅',
          },
          {
            title: '华丽玫瑰花',
            subtitle: '精致浪漫 时尚优雅',
          },
          {
            title: '精美藤蔓',
            subtitle: '线条优美 浪漫情调',
          },
          {
            title: '主题背景板',
            subtitle: '高贵圣洁 华丽梦幻',
          },
          {
            title: '梦幻软光灯带',
            subtitle: '光芒璀璨 增添氛围',
          },
          {
            title: '欧式雕花柱',
            subtitle: '雕刻精细 增添立体感',
          },
          {
            title: '梦幻天使',
            subtitle: '人间精灵 守护爱情',
          },
          {
            title: '梦幻蜡烛',
            subtitle: '温馨烛光 灵动火苗',
          },
          {
            title: '欧式罗马花盆',
            subtitle: '精致浪漫 时尚优雅',
          },
          {
            title: '欧式罗马柱',
            subtitle: '尽显欧式奢华与典雅',
          },
          {
            title: '欧式唯美花艺',
            subtitle: '梦幻色调 唯美大气',
          },
        ],
      },
      {
        id: 2,
        title: 'T台过道区',
        list: [
          {
            title: '幸福之路',
            subtitle: '唯美浪漫 时尚大气',
          },
          {
            title: '台阶装置',
            subtitle: '唯美浪漫 时尚大气',
          },
          {
            title: '时尚小舞台',
            subtitle: '精致浪漫 凸显主题',
          },
          {
            title: '精美珠光地毯',
            subtitle: '珠光闪耀 高端大气',
          },
          {
            title: '梦幻水晶灯',
            subtitle: '奢华璀璨 高贵典雅',
          },
          {
            title: '欧式罗马柱',
            subtitle: '尽显欧式奢华与典雅',
          },
          {
            title: '欧式罗马花盆',
            subtitle: '高雅奢华 彰显品味',
          },
          {
            title: '梦幻蜡烛',
            subtitle: '温馨烛光 灵动火苗',
          },
          {
            title: '梦幻天使',
            subtitle: '人间精灵 守护爱情',
          },
          {
            title: '欧式唯美花艺',
            subtitle: '梦幻色调 唯美大气',
          },
          {
            title: '欧式浪漫花球',
            subtitle: '色彩搭配 增添氛围',
          },
        ],
      },
      {
        id: 3,
        title: '宴会餐桌区',
        list: [
          {
            title: '主题桌布',
            subtitle: '高贵色调 舒适柔软',
          },
          {
            title: '欧式吊幔桌围',
            subtitle: '低调奢华 高端品质',
          },
          {
            title: '欧式竹节椅',
            subtitle: '奢华享受 高贵低调',
          },
          {
            title: '欧式椅背纱',
            subtitle: '唯美梦幻 轻盈飘逸',
          },
          {
            title: '欧式主桌花',
            subtitle: '唯美大气 高贵华丽',
          },
          {
            title: '梦幻蜡烛',
            subtitle: '温馨时尚 精致梦幻',
          },
          {
            title: '欧式罗马柱',
            subtitle: '尽显欧式奢华与典雅',
          },
          {
            title: '金色欧式烛台',
            subtitle: '高贵奢华 彰显品味',
          },
          {
            title: '欧式客桌花',
            subtitle: '优雅别致 精美独特',
          },
          {
            title: '欧式珠链',
            subtitle: '高雅奢华 彰显品味',
          },
          {
            title: '精美椅背蝴蝶结',
            subtitle: '小巧精致 凸显主题',
          },
          {
            title: '浪漫花瓣',
            subtitle: '营造气氛 增加层次',
          },
          {
            title: '主题桌卡',
            subtitle: '主题风格 精美细节',
          },
          {
            title: '主题席卡',
            subtitle: '主题风格 精美细节',
          },
        ],
      },
      {
        id: 4,
        title: '迎宾合影区',
        list: [
          {
            title: '背景架',
            subtitle: '专业调配 质量保证',
          },
          {
            title: '主题布幔',
            subtitle: '丝质柔软 色彩鲜艳',
          },
          {
            title: '欧式吊幔',
            subtitle: '低调奢华 高端品质',
          },
          {
            title: '主题背景板',
            subtitle: '高贵圣洁 华丽梦幻',
          },
          {
            title: '欧式雕花栅栏',
            subtitle: '雕刻精美 增添氛围',
          },
          {
            title: '时尚小舞台',
            subtitle: '精致浪漫 凸显主题',
          },
          {
            title: '精美地毯',
            subtitle: '高贵色调 舒适柔软',
          },
          {
            title: '浪漫白鸽',
            subtitle: '灵动活泼 寓意美好',
          },
          {
            title: '欧式喷泉',
            subtitle: '高雅奢华 彰显品味',
          },
          {
            title: '欧式唯美花艺',
            subtitle: '色彩搭配 增添氛围',
          },
          {
            title: '欧式罗马花盆',
            subtitle: '高雅奢华 彰显品味',
          },
          {
            title: '欧式罗马柱',
            subtitle: '尽显欧式奢华与典雅',
          },
          {
            title: '梦幻天使',
            subtitle: '人间精灵 守护爱情',
          },
          {
            title: '梦幻蜡烛',
            subtitle: '温馨时尚 精致梦幻',
          },
          {
            title: '梦幻云朵棉',
            subtitle: '营造梦幻视觉感',
          },
        ],
      },
      {
        id: 5,
        title: '迎宾签到区',
        list: [
          {
            title: '背景架',
            subtitle: '专业调配 质量保证',
          },
          {
            title: '主题布幔',
            subtitle: '丝质柔软 色彩鲜艳',
          },
          {
            title: '欧式吊幔',
            subtitle: '低调奢华 高端品质',
          },
          {
            title: '主题背景板',
            subtitle: '高贵圣洁 华丽梦幻',
          },
          {
            title: '主题桌布',
            subtitle: '丝质柔软 色彩鲜艳',
          },
          {
            title: '复古香水瓶',
            subtitle: '高贵优雅 浪漫情调',
          },
          {
            title: '复古首饰盒',
            subtitle: '蕴含着典雅的贵族风情',
          },
          {
            title: '欧式罗马花盆',
            subtitle: '高雅奢华 彰显品味',
          },
          {
            title: '欧式奢华烛台',
            subtitle: '欧式浪漫 奢华品质',
          },
          {
            title: '金色欧式烛台',
            subtitle: '高贵奢华 彰显品味',
          },
          {
            title: '梦幻天使小摆件',
            subtitle: '人间精灵 守护爱情',
          },
          {
            title: '复古留声机',
            subtitle: '色调高雅 回味经典',
          },
          {
            title: '欧式唯美花艺',
            subtitle: '色彩搭配 增添氛围',
          },
          {
            title: '梦幻蜡烛',
            subtitle: '温馨时尚 精致梦幻',
          },
          {
            title: '欧式复古罗马花盆',
            subtitle: '高雅奢华 彰显品味',
          },
          {
            title: '欧式雕花相框',
            subtitle: '高雅奢华 精雕细琢',
          },
          {
            title: '华丽玫瑰花',
            subtitle: '精致浪漫 时尚优雅',
          },
          {
            title: '精美藤蔓',
            subtitle: '线条优美 浪漫情调',
          },
          {
            title: '欧式雕花栅栏',
            subtitle: '雕刻精美 增添氛围',
          },
          {
            title: '复古蝴蝶',
            subtitle: '灵动优美 复古时尚',
          },
          {
            title: '主题签到笔',
            subtitle: '主题搭配 细节精致',
          },
          {
            title: '主题签到本',
            subtitle: '精美独特 主题搭配',
          },
          {
            title: '梦幻水晶灯',
            subtitle: '奢华璀璨 高贵典雅',
          },
          {
            title: '主题迎宾牌',
            subtitle: '独特设计 主题展示',
          },
          {
            title: '精美画架',
            subtitle: '欧式风格 完美搭配',
          },
          {
            title: '主题席位牌',
            subtitle: '主题搭配 细节精致',
          },
        ],
      },
      {
        id: 6,
        title: '迎宾甜品区',
        list: [
          {
            title: '背景架',
            subtitle: '专业调配 质量保证',
          },
          {
            title: '主题布幔',
            subtitle: '丝质柔软 色彩鲜艳',
          },
          {
            title: '欧式吊幔',
            subtitle: '低调奢华 高端品质',
          },
          {
            title: '主题背景板',
            subtitle: '高贵圣洁 华丽梦幻',
          },
          {
            title: '梦幻logo字母',
            subtitle: '时尚新颖 温馨梦幻',
          },
          {
            title: '复古长条桌',
            subtitle: '典雅简约 华丽低调',
          },
          {
            title: '欧式雕花圆桌',
            subtitle: '精美雕花 端庄大气',
          },
          {
            title: '欧式实木雕花桌',
            subtitle: '浓厚的复古贵族气息',
          },
          {
            title: '梦幻水晶灯',
            subtitle: '奢华璀璨 高贵典雅',
          },
          {
            title: '复古首饰盒',
            subtitle: '蕴含着典雅的贵族风情',
          },
          {
            title: '精致甜品架',
            subtitle: '贴合主题 精致浪漫',
          },
          {
            title: '精致甜品盘',
            subtitle: '贴合主题 精致浪漫',
          },
          {
            title: '欧式雕花茶具',
            subtitle: '彰显欧式贵族风情',
          },
          {
            title: '欧式雕花椅',
            subtitle: '色调高雅 华丽复古',
          },
          {
            title: '复古小提琴',
            subtitle: '优雅别致 精美独特',
          },
          {
            title: '欧式唯美花艺',
            subtitle: '色彩搭配 增添氛围',
          },
          {
            title: '欧式罗马花盆',
            subtitle: '高雅奢华 彰显品味',
          },
          {
            title: '欧式罗马柱',
            subtitle: '尽显欧式奢华与典雅',
          },
          {
            title: '复古书本',
            subtitle: '复古文艺 经典传承',
          },
          {
            title: '梦幻蜡烛',
            subtitle: '温馨时尚 精致梦幻',
          },
          {
            title: '梦幻纱幔',
            subtitle: '唯美梦幻 轻盈飘逸',
          },
          {
            title: '优质插花网格',
            subtitle: '造型多变 主题搭配',
          },
          {
            title: '浪漫瀑布花',
            subtitle: '欧式浪漫 灵动优雅',
          },
          {
            title: '浪漫花瓣',
            subtitle: '营造气氛 增加层次',
          },
        ],
      },
      {
        id: 7,
        title: '花艺设计区',
        list: [
          {
            title: '追光灯',
            subtitle: '新娘手捧 传递幸福',
          },
          {
            title: '精美胸花',
            subtitle: '胸前装饰 精致小巧',
          },
          {
            title: '精美腕花',
            subtitle: '手腕花艺 花香相伴',
          },
          {
            title: '精美车头花',
            subtitle: '婚车头车精美花艺',
          },
        ],
      },
      {
        id: 9,
        title: '灯光舞美',
        list: [
          {
            title: '追光灯',
            subtitle: '突出中心 画龙点睛',
          },
          {
            title: '光束灯',
            subtitle: '光束集中 梦幻氛围',
          },
          {
            title: 'LED par灯',
            subtitle: '环境染色 烘托气氛',
          },
          {
            title: 'LED洗墙灯',
            subtitle: '渲染背景 增强效果',
          },
          {
            title: 'Par 64',
            subtitle: '基本光源 整体照明',
          },
          {
            title: '薄雾机',
            subtitle: '营造氛围 集中光束',
          },
        ],
      },
      {
        id: 10,
        title: '婚礼执行',
        list: [
          {
            title: '婚礼管家',
            subtitle: '专业贴心的统筹服务',
          },
          {
            title: '婚礼执行',
            subtitle: '呈现婚礼完美现场',
          },
          {
            title: '花艺指导',
            subtitle: '用艺术的视觉呈现花之美',
          },
          {
            title: '婚礼管家',
            subtitle: '专业贴心的统筹服务',
          },
          {
            title: '婚礼执行',
            subtitle: '呈现婚礼完美现场',
          },
          {
            title: '花艺指导',
            subtitle: '用艺术的视觉呈现花之美',
          },
          {
            title: '婚礼执行',
            subtitle: '呈现婚礼完美现场',
          },
          {
            title: '花艺指导',
            subtitle: '用艺术的视觉呈现花之美',
          },
          {
            title: '灯光指导',
            subtitle: '营造最梦幻的婚礼气氛',
          },
        ],
      },
    ],
  },
  change(e) {
    this.setData({
      indexSize: e.detail.current
    })
  },
  scrollTo(e) {
    this.setData({
      indexSize: e.target.dataset.index
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
      console.log("")
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})
