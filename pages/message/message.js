//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    dialogs: [
      {
        type: "inner",
        messageId: "",
        user: "系统",
        userId: "",
        avatar: "",
        content: "欢迎加入瓜葛小程序，点击对话框可回复消息！完善身份认证、增加履约次数提高信用等级！",
        time: "2018-06-07 22:10:20",
        i: '2018'
      },
      // {
      //   type: "outer",
      //   messageId: "",
      //   sendTo: "系统",
      //   content: "收到！",
      //   time: "2018-06-08 00:00:25",
      //   i: '2017'
      // }
    ]
  },
  onLoad: function () {
    
  },
  onReady: function() {
    wx.hideTabBarRedDot({
      index: 1,
    });
    for (let dialog of this.data.dialogs) {
      dialog.timeValue = dialog.time.replace(/[-:\s]/g, "").substring(2, 10);
    }
    this.setData({dialogs: this.data.dialogs});
  },
  sendMessage: function(e) {
    if (e.detail) {
      let dialogs = this.data.dialogs;
      e.detail.timeValue = e.detail.time.replace(/[:-\s]/g, '').substring(2, 10);
      dialogs.push(e.detail);
      this.setData({"dialogs": dialogs});
    }
  }
})
