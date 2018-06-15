//request-list.js
//获取应用实例
const app = getApp()

Page({
  data: {
    requests: [
      {
        avatar: 'https://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTKrOslZrHKk2yTIX2snNbpQ43RAqHUgeHVmf9dbJVuibjrGIZvVCBxck6tj1ic8fcTXzibh15ic7EoQ5g/132',
        name: '孑岳🤓',
        title: '帮忙做家务',
        content: '地点在A号楼X单元，时间是下午14:00-15:00。帮忙扫地。',
        reward: 25,
        time: '2018-06-08',
        requestClass: '家政',
        state: '待帮忙',
        credit: '较高',
        requestId: '0001'
      },
      // {
      //   avatar: '/resources/01.jpg',
      //   name: '小虫',
      //   title: '领快递',
      //   content: '快递在A号楼X单元蜂巢快递箱****************************************',
      //   reward: 5,
      //   time: '2018-06-08',
      //   requestClass: '代领',
      //   state: '待帮忙',
      //   credit: '较高',
      //   requestId: '0001'
      // },
      {
        avatar: '/resources/02.jpg',
        name: 'C++',
        title: '帮忙买一下菜',
        content: '需要猪里脊半斤，猪排骨一斤，嫩豆腐一块，海带一小袋，小白菜一包',
        reward: 10,
        time: '2018-06-08',
        requestClass: '采购',
        state: '待帮忙',
        credit: '较高',
        requestId: '0001'
      },
      {
        avatar: '/resources/03.jpg',
        name: '刘洋',
        title: '看护老人',
        content: '**点**分到**点**分在A号楼**栋**号看护一下老人，扶老人去厕所、休息',
        reward: 50,
        time: '2018-06-08',
        requestClass: '看护',
        state: '待帮忙',
        credit: '较高',
        requestId: '0001'
      }
    ]
  },
  onLoad: function () {
  },
  onReady: function () {

  }
})