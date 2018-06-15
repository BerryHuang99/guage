// pages/send-request/send-request.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    typeList: [
      '家务',
      '采购',
      '搬运',
      '看护',
      '快件代领',
      '其他'
    ],
    rewardList: [
      0, 1, 5, 10, 25, 50, 100, 200, 500
    ],
    creditLevels: [
      '一般',
      '中等',
      '较高'
    ],
    creditLevel: '一般',
    type: "家务",
    reward: 0
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
  changeType: function(e) {
    this.setData({type: this.data.typeList[e.detail.value]});
  },
  changeReward: function (e) {
    this.setData({ reward: this.data.rewardList[e.detail.value] });
  },
  changeCredit: function (e) {
    this.setData({ creditLevel: this.data.creditLevels[e.detail.value] });
  },
  submit: function(e) {
    wx.showToast({
      title: '提交成功',
      icon: 'none',
      duration: 2000
    });
    setTimeout(() => {
      wx.navigateBack({});
    }, 2000);
    
  }
})