import * as echarts from '../../../../ec-canvas/echarts';
var verified = 0; //已调查
var noVerified = 0; //未调查
var num = 0; //合计
var noP = 0; //查无此人
var moveP = 0; //已搬迁
var emptyP = 0; //空挂户
var outP = 0; //外出
var cancelTotal = 0; //死亡已注销
var dieP = 0; //死亡待注销
var normalP = 0; //正常
const app = getApp();

function setOptionOne(chart, num, verified, noVerified) {
  // const chart = echarts.init(canvas, null, {
  //   width: width,
  //   height: height
  // });
  // canvas.setChart(chart);

  var option = {
    title: {
      text: '总人数: [' + num + ']',
      subtext: '',
      x: 'center',
      textStyle: {
        fontSize: 12,
        color: '#FFFFFF',
        lineHeight: 10,
        align: 'center',
        fontFamily: 'Microsoft YaHei'
      },
      padding: [
        5, // 上
        10, // 右
        5, // 下
        10 // 左
      ],
      backgroundColor: 'rgba(50, 50, 50, 0.701961)',
      bottom: '8%',
      right: '20px',
      borderRadius: 5 // 统一设置四个角的圆角大小
    },
    legend: {
      orient: 'vertical',
      x: '200',
      y: '80',
      itemHeight: 13,
      itemGap: 10,
      itemWidth: 13,

      data: ['未调查', '已调查'],
      formatter: function (name) {
        if (name == "未调查")
          return name + '      ' + verified + '';
        else if (name == "已调查")
          return name + '      ' + noVerified + '';
      }
    },
    color: ['#cbcbcb', '#008000'],
    series: [{
      name: '',
      type: 'pie',
      radius: ['50%', '60%'],
      center: ['100px', '40%'],
      avoidLabelOverlap: false,
      label: {
        normal: {
          show: false,
          position: 'center',
        },
        emphasis: {
          show: true,
          textStyle: {
            fontSize: '16',
            fontWeight: 'bold'
          }
        }
      },
      labelLine: {
        normal: {
          show: false
        }
      },
      data: [{
        value: verified,
        name: '未调查',

      },
      {
        value: noVerified,
        name: '已调查'
      }
      ]
    }]
  };

  chart.setOption(option);
  // return chart;
}
//第二个图标
function setOptionTwo(chart, noP, moveP, emptyP, outP, cancelTotal, normalP) {
  // const chart = echarts.init(canvas, null, {
  //   width: width,
  //   height: height
  // });
  // canvas.setChart(chart);

  const option2 = {
    tooltip: {
      trigger: 'item',
      formatter: "{a} \n{b}: {c} ({d}%)"
    },
    legend: {
      orient: 'vertical',
      x: '200',
      y: '30',
      itemGap: 10,
      itemWidth: 13,
      data: ['查无此人', '已搬迁', '空挂户', '外出', '死亡', '正常'],
      formatter: function (name) {
        if (name == "查无此人")
          return name + '     0';
        else if (name == "已搬迁")
          return name + '         2';
        else if (name == "空挂户")
          return name + '         1';
        else if (name == "外出")
          return name + '             2';
        else if (name == "死亡")
          return name + '             0';
        else if (name == "正常")
          return name + '             8';

      }
    },
    //饼图的颜色
    color: ['#008000', '#ffde33', '#ff9933', '#cc0033', '#660099', '#7e0023', '#999', '#c23531', '#2f4554', '#61a0a8', '#d48265', '#91c7ae', '#749f83', '#ca8622', '#bda29a', '#6e7074', '#546570', '#c4ccd3'],

    series: [{
      name: '访问来源',
      type: 'pie',
      radius: ['0', '80%'],
      center: ['100px', '52%'], //饼图的位置
      avoidLabelOverlap: false,
      label: {
        normal: {
          show: false,
          position: 'center'
        },
        // emphasis: {
        //   show: true,
        //   textStyle: {
        //     fontSize: '16',
        //     fontWeight: 'bold'
        //   }
        // }
      },
      labelLine: {
        normal: {
          show: false
        }
      },
      data: [{
        value: 0,
        name: '查无此人'
      },
      {
        value: 2,
        name: '已搬迁'
      },
      {
        value: 1,
        name: '空挂户'
      },
      {
        value: 2,
        name: '外出'
      },
      {
        value: 0,
        name: '死亡'
      }, {
        value: 8,
        name: '正常'
      }
      ]
    }]
  };

  chart.setOption(option2);
  return chart;
}

Page({
  // onShareAppMessage: function (res) {
  //   return {
  //     title: 'ECharts 可以在微信小程序中使用啦！',
  //     path: '/pages/index/index',
  //     success: function () { },
  //     fail: function () { }
  //   }
  // },



  onLoad: function (options) {

    this.oneComponent = this.selectComponent('#mychart-one'); //第一个图标 ID
    this.twoComponent = this.selectComponent('#mychart-two'); //第二个图标 ID
    this.getOneEchart(); //第一个图表加数据
    this.getTwoEchart(); //第二个图表加数据
  },
  // onReady: function () { //这一步是一定要注意的       
  //   this.oneComponent = this.selectComponent('#mychart-one');
  //   this.twoComponent = this.selectComponent('#mychart-two');
  // },
  init_one: function (num, verified, noVerified) { //初始化第一个图表        
    this.oneComponent.init((canvas, width, height) => {
      const chart = echarts.init(canvas, null, {
        width: width,
        height: height
      });
      setOptionOne(chart, num, verified, noVerified)
      this.chart = chart;
      return chart;
    });
  },

  init_two: function (noP, moveP, emptyP, outP, cancelTotal, normalP) { //初始化第二个图表 
    this.twoComponent.init((canvas, width, height) => {
      const chart = echarts.init(canvas, null, {
        width: width,
        height: height
      });
      setOptionTwo(chart, noP, moveP, emptyP, outP, cancelTotal, normalP)
      this.chart = chart;
      return chart;
    });
  },
  getOneEchart: function () { //这一步其实就要给图表加上数据      
    var _this = this;
    _this.init_one('63', '61', '2');
    // wx.request({
    //   url: 'https://xxxxxxx.com', //你请求数据的接口地址           

    //   method: 'POST',
    //   header: {
    //     "Content-Type": "application/json"
    //   },
    //   data: { //传的参数，这些都不用多说了吧  
    //     id: xxxx
    //   },
    //   success: function(res) { //我这里就假设res.xdata和res.ydata是我们需要的数据，即在x轴和y轴展示的数据，记住一定是数组哦！ 
    //     _this.init_one(res.xdata, res.ydata)
    //   }
    //})
  },
  //第二个图表也是一样的处理   
  getTwoEchart: function () {
    var _this = this;
    noP = '0';
    moveP = '2'
    emptyP = '1'
    outP = '2'
    cancelTotal = '0'
    normalP = '8'
    _this.init_two(noP, moveP, emptyP, outP, cancelTotal, normalP)
    // wx.request({
    //   url: 'https://xxxxxxx.com', //你请求数据的接口地址     
    //   method: 'POST',
    //   header: {
    //     "Content-Type": "application/json"
    //   },
    //   data: { //传的参数，这些都不用多说了吧     
    //     id: xxxx
    //   },
    //   success: function (res) {
    //     _this.init_two(res.xdata, res.ydata)
    //   }
    // })
  },
  aa: function (e) {
    var that = this;
    that.getOneEchart();
  }

});