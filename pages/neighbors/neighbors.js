//neighbors.js
//获取应用实例
const app = getApp()

Page({
  data: {
    neighbors: [
      {
        avatar: '/resources/01.jpg',
        name: '小虫',
        credit: 72,
        thumUp: 75,
        requestId: '0001'
      },
      {
        avatar: '/resources/02.jpg',
        name: 'C++',
        credit: 25,
        thumUp: 10,
        requestId: '0001'
      },
      {
        avatar: '/resources/03.jpg',
        name: '刘洋',
        credit: 5,
        thumUp: 20,
        requestId: '0001'
      }
    ]
  },
  onLoad: function () {
    
  },
  onReady: function() {
   
  }
})
