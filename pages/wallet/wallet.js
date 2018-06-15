// pages/wallet/wallet.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    ballance: 100,
    withdrawModal: true,
    withdrawMoney: "",
    rechargeModal: true,
    rechargeMoney: ""
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
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  },
  showWithdrawModal: function (){
    this.setData({withdrawModal: false});
  },
  cancelWithdrawModal: function () {
    this.setData({ withdrawModal: true,
    withdrawMoney: "" });
  },
  showRechargeModal: function() {
    this.setData({rechargeModal: false});
  },
  cancelRechargeModal: function () {
    this.setData({ rechargeModal: true,
    rechargeMoney: ""});
  }
})