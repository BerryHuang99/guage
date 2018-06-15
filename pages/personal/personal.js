//personal.js
//获取应用实例
const app = getApp()

Page({
  data: {
    userInfo: {},
    suggestModal: true,
    phoneModal: true,
    villageModal: true,
    addressModal: true
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo
      })
    }
  },
  onReady: function () {

  },
  toWallet: function() {
    wx.navigateTo({
      url: '/pages/wallet/wallet',
    })
  },
  toCertification: function() {
    wx.navigateTo({
      url: '/pages/certification/certification',
    })
  },
  toCreditAnalysis: function() {
    wx.navigateTo({
      url: '/pages/credit-analysis/credit-analysis',
    })
  },
  showAddressModal: function() {
    this.setData({addressModal: false});
  },
  showVillageModal: function() {
    this.setData({villageModal: false});
  },
  showPhoneModal: function() {
    this.setData({phoneModal: false});
  },
  showSuggestModal: function() {
    this.setData({suggestModal: false});
  },
  cancelAddressModal: function () {
    this.setData({ addressModal: true });
  },
  cancelVillageModal: function () {
    this.setData({ villageModal: true });
  },
  cancelPhoneModal: function () {
    this.setData({ phoneModal: true });
  },
  cancelSuggestModal: function () {
    this.setData({ suggestModal: true });
  },
})
