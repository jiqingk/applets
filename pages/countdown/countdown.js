// Page({

//   data: {



//   },

//   onLoad: function () {

//     var that = this; // this 的指向性问题  需要在function 外保存

//     wx.request({

//       url: 'xxx',

//       data: { xxx },

//       success: function (result) {

//         that.setData({

//           dataSourcesArray: result.data.order // 请求到的数据

//         });

//         /**

//         *  result.data.order 是 请求所有的订单信息

//         *  serviceTime 是封装的请求服务器 时间

//         *  服务器的时间格式是   2018/08/01 17:35:08

//         *

//         *  itemIndex 是防止列表 中的某一条数据已经被购买而导致修改数据时的错乱

//         *

//         */

//         that.serviceTime(function (res) {

//           // 服务器的时间戳

//           var nowYear = res.data.serviceTime.split(' ')[0];

//           var nowTime = new Date(res.data.serviceTime).getTime();

//           //  这里传入只有未结束的订单

//           var orderDetail = [];

//           for (var i = 0; i < result.data.order.length; i++) {

//             // 如果订单未过期状态

//             if (result.data.order[i].state == '待付款') {

//               result.data.order[i].itemIndex = i;

//               orderDetail.push(result.data.order[i]);

//             }

//           }

//           result.data.order = orderDetail;

//           that.operation(result);// 待付款的订单传入这个方法内

//         });

//       }

//     })

//   },

//   /*

//       * 这里应该不要用setInterval  应该用 setTimeout 的  避免造成 网络阻塞

//   */

//   operation: function (result) { // 接收到没有结束的订单信息

//     var that = this;

//     time = setInterval(function () { // 循环执行

//       that.serviceTime(function (res) {// 获取服务器时间

//         that.resetState(res, result); // 设置未到结束时间订单的状态

//       });

//     }, 1000);

//   },

//   // 设置未结束订单的状态

//   /*

//       ** res   请求获取服务器的时间的结果集

//       ** dataSourcesArray 是显示页面的订单信息

//   */

//   resetState: function (res, result) {

//     var nowTime = new Date(res.data.serviceTime).getTime();// 当前时间的时间戳



//     for (let i = 0; i < result.data.order.length; i++) { // 循环添加 倒计时

//       var index = result.data.order[i].itemIndex;

//       var status = "dataSourcesArray[" + index + "]." + 'state';

//       var showTime = "dataSourcesArray[" + index + "]." + 'showTime';

//       var futureTime = new Date(result.data.order[i].expiryTime).getTime();

//       // 未来的时间减去现在的时间 ;

//       var resTime = (futureTime - nowTime) / 1000;

//       // 结束时间

//       var zero = futureTime - nowTime;

//       if (zero >= 0) { // 认为还没有到达结束的时间

//         var timeSeconds = timestampToTime(resTime);

//         this.setData({

//           [showTime]: timeSeconds

//         })

//       } else { // 结束的时间已经到了

//         result.data.order.splice(i, 1); // 该订单自动结束时间 从这个列表中删除  就不必老是循环他

//         this.setData({

//           [showTime]: "超过时间  订单已经关闭",

//           [status]: "订单过期"

//         });

//       }



//       if (result.data.order.length == 0) {// 如果没有可支付订单 则停止这个订单

//         clearInterval(time);

//       }

//     }

//   },

//   // 请求到系统时间 调取成功之后执行回调函数

//   serviceTime: function (fn) {

//     wx.request({

//       url: 'https://www.xxx.cn/getTime', // 仅为示例，并非真实的接口地址

//       header: {

//         'content-type': 'application/json' // 默认值

//       },

//       success(res) {

//         fn && fn(res);

//       }

//     })

//   }

// })



// // 时间转换

// function timestampToTime(s) {

//   var h = Math.floor(s / 3600 % 24);

//   var min = Math.floor(s / 60) % 60;

//   var sec = s % 60;

//   h = add(h);

//   min = add(min);

//   sec = add(sec);

//   return h + ':' + min + ':' + sec

// }



// // 添 0

// function add(m) {

//   return m < 10 ? '0' + m : m

// }

// 定义一个总毫秒数，以一天为例
//var total_micro_second = 3600 * 1000 * 24; //这是一天倒计时
var total_micro_second = 1800 * 1000; //这是10秒倒计时
/* 毫秒级秒杀倒计时 */
function countdown(that) {
  // 渲染倒计时时钟
  that.setData({
    clock: dateformat(total_micro_second) //格式化时间
  });

  if (total_micro_second <= 0) {
    that.setData({
      clock: "秒杀结束"
    });
    // timeout则跳出递归
    return;
  }
  //settimeout实现倒计时效果
  setTimeout(function() {
    // 放在最后--
    total_micro_second -= 10;
    countdown(that);
  }, 10) //注意毫秒的步长受限于系统的时间频率，于是我们精确到0.01s即10ms
}

// 时间格式化输出，如1天天23时时12分分12秒秒12 。每10ms都会调用一次
function dateformat(micro_second) {
  // 总秒数
  var second = Math.floor(micro_second / 1000);
  // 天数
  var day = Math.floor(second / 3600 / 24);
  // 总小时
  var hr = Math.floor(second / 3600);
  // 小时位
  var hr2 = hr % 24;
  // 分钟位
  var min = Math.floor((second - hr * 3600) / 60);
  // 秒位
  var sec = (second - hr * 3600 - min * 60); // equal to => var sec = second % 60;
  // 毫秒位，保留2位
  var micro_sec = Math.floor((micro_second % 1000) / 10);
 // return day + "天" + hr2 + "时" + min + "分" + sec + "秒" + micro_sec;
  return  min + "分" + sec + "秒" ;

}

Page({
  data: {
    clock: ''
  },
  onLoad: function() {
    countdown(this);
  }
});