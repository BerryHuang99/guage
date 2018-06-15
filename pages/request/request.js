//request.js
//获取应用实例
const app = getApp()

Page({
  data: {
    avatar: '/resources/01.jpg',
    name: '小虫',
    title: '领快递',
    content: '快递在A号楼X单元蜂巢快递箱****************************************',
    reward: 5,
    time: '2018-06-08',
    requestClass: '代领',
    state: '待帮忙',
    thumUp: 75,
    credit: '较高',
    requestId: '0001'
  },
  onLoad: function () {
  },
  onReady: function () {
    if (this.data.state == 0) {
      
    }
  },
  toHome: function() {
    wx.showToast({
      title: '提交成功',
      icon: 'none',
      duration: 2000
    })
    setTimeout(() => {
      wx.navigateBack({})
    },2000);
  }
})