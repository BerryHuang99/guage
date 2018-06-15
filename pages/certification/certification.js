// pages/certification/certification.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    certificationType: ['身份证', '户口本', '居住证明', '其他'],
    certification: "身份证",
    ipositiveUrl: "",
    ioppositeUrl: "",
    huPositiveUrl: "",
    huOppositeUrl: "",
    resCertificationUrl: "",
    otherUrl: ""
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
  changeCertification: function(e) {
    this.setData({certification: this.data.certificationType[e.detail.value]});
  },
  chooseIdPositiveImg: function() {
    let page = this;
    wx.chooseImage({
      success: function(res) {
        page.setData({ipositiveUrl: res.tempFilePaths[0]});
      },
      count: 1
    })
  },
  chooseIdOppositeImg: function() {
    let page = this;
    wx.chooseImage({
      success: function (res) {
        page.setData({ ioppositeUrl: res.tempFilePaths[0]});
      },
      count: 1
    })
  },
  submit: function() {
    wx.showToast({
      title: '提交成功',
      icon: 'none',
      duration: 2000
    });
    setTimeout(() => {
      wx.navigateBack({
        
      })
    }, 2000)
  }
})